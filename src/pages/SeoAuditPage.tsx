import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, XCircle, AlertTriangle, RefreshCw, 
  Globe, FileText, Image, Code, Link2, Search,
  ChevronDown, ChevronUp, Zap, Shield
} from "lucide-react";

type Status = "pass" | "fail" | "warning";

interface AuditItem {
  label: string;
  status: Status;
  value: string;
  recommendation?: string;
  category: string;
}

const STATUS_ICON = {
  pass: <CheckCircle className="w-4 h-4 text-green-500" />,
  fail: <XCircle className="w-4 h-4 text-red-500" />,
  warning: <AlertTriangle className="w-4 h-4 text-yellow-500" />,
};

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  "Meta Tags": <FileText className="w-4 h-4" />,
  "Headings": <Code className="w-4 h-4" />,
  "Images": <Image className="w-4 h-4" />,
  "Links": <Link2 className="w-4 h-4" />,
  "Performance": <Zap className="w-4 h-4" />,
  "Security": <Shield className="w-4 h-4" />,
  "Schema": <Search className="w-4 h-4" />,
};

const PAGES_TO_AUDIT = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function auditPage(doc: Document, url: string): AuditItem[] {
  const items: AuditItem[] = [];

  // Title
  const title = doc.querySelector("title")?.textContent || "";
  items.push({
    label: "Title Tag",
    category: "Meta Tags",
    value: title ? `"${title}" (${title.length} chars)` : "Missing",
    status: !title ? "fail" : title.length > 60 ? "warning" : "pass",
    recommendation: !title
      ? "Add a unique <title> tag under 60 characters with your main keyword."
      : title.length > 60
      ? "Shorten title to under 60 characters to avoid truncation in SERPs."
      : undefined,
  });

  // Meta Description
  const desc = doc.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  items.push({
    label: "Meta Description",
    category: "Meta Tags",
    value: desc ? `${desc.length} chars` : "Missing",
    status: !desc ? "fail" : desc.length > 160 ? "warning" : "pass",
    recommendation: !desc
      ? "Add a meta description under 160 characters with a call-to-action."
      : desc.length > 160
      ? "Shorten to under 160 characters to prevent truncation."
      : undefined,
  });

  // Canonical
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
  items.push({
    label: "Canonical URL",
    category: "Meta Tags",
    value: canonical || "Missing",
    status: canonical ? "pass" : "warning",
    recommendation: !canonical ? "Add a canonical tag to prevent duplicate content issues." : undefined,
  });

  // OG Tags
  const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute("content");
  const ogDesc = doc.querySelector('meta[property="og:description"]')?.getAttribute("content");
  const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute("content");
  const ogMissing = [!ogTitle && "og:title", !ogDesc && "og:description", !ogImage && "og:image"].filter(Boolean);
  items.push({
    label: "Open Graph Tags",
    category: "Meta Tags",
    value: ogMissing.length === 0 ? "All present" : `Missing: ${ogMissing.join(", ")}`,
    status: ogMissing.length === 0 ? "pass" : ogMissing.length >= 2 ? "fail" : "warning",
    recommendation: ogMissing.length > 0 ? `Add missing OG tags (${ogMissing.join(", ")}) for better social sharing.` : undefined,
  });

  // H1
  const h1s = doc.querySelectorAll("h1");
  items.push({
    label: "H1 Heading",
    category: "Headings",
    value: `${h1s.length} found`,
    status: h1s.length === 1 ? "pass" : h1s.length === 0 ? "fail" : "warning",
    recommendation:
      h1s.length === 0
        ? "Add exactly one H1 heading that matches the page's primary keyword."
        : h1s.length > 1
        ? "Use only one H1 per page. Convert extras to H2 or H3."
        : undefined,
  });

  // Heading hierarchy
  const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
  let hierarchyOk = true;
  let prev = 0;
  headings.forEach((h) => {
    const level = parseInt(h.tagName[1]);
    if (level > prev + 1 && prev > 0) hierarchyOk = false;
    prev = level;
  });
  items.push({
    label: "Heading Hierarchy",
    category: "Headings",
    value: hierarchyOk ? "Proper sequence" : "Skipped levels detected",
    status: hierarchyOk ? "pass" : "warning",
    recommendation: !hierarchyOk ? "Don't skip heading levels (e.g., H1 → H3). Use H1 → H2 → H3 in order." : undefined,
  });

  // Images without alt
  const images = doc.querySelectorAll("img");
  const noAlt = Array.from(images).filter((img) => !img.getAttribute("alt")?.trim());
  items.push({
    label: "Image Alt Tags",
    category: "Images",
    value: `${noAlt.length}/${images.length} missing alt`,
    status: noAlt.length === 0 ? "pass" : noAlt.length > 3 ? "fail" : "warning",
    recommendation: noAlt.length > 0 ? `Add descriptive alt text to ${noAlt.length} image(s) for accessibility and SEO.` : undefined,
  });

  // Lazy loading
  const nonLazy = Array.from(images).filter(
    (img) => !img.getAttribute("loading") && !img.closest("[data-radix-scroll-area-viewport]")
  );
  items.push({
    label: "Lazy Loading",
    category: "Performance",
    value: nonLazy.length === 0 ? "All images lazy-loaded" : `${nonLazy.length} not lazy-loaded`,
    status: nonLazy.length === 0 ? "pass" : "warning",
    recommendation: nonLazy.length > 0 ? 'Add loading="lazy" to below-the-fold images for faster page loads.' : undefined,
  });

  // JSON-LD Schema
  const schemas = doc.querySelectorAll('script[type="application/ld+json"]');
  items.push({
    label: "Structured Data (JSON-LD)",
    category: "Schema",
    value: `${schemas.length} schema(s) found`,
    status: schemas.length > 0 ? "pass" : "warning",
    recommendation: schemas.length === 0 ? "Add JSON-LD structured data (Person, ProfessionalService, FAQPage) for rich results." : undefined,
  });

  // Viewport meta
  const viewport = doc.querySelector('meta[name="viewport"]');
  items.push({
    label: "Viewport Meta",
    category: "Performance",
    value: viewport ? "Present" : "Missing",
    status: viewport ? "pass" : "fail",
    recommendation: !viewport ? 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> for mobile responsiveness.' : undefined,
  });

  // Internal links
  const links = doc.querySelectorAll("a[href]");
  const internal = Array.from(links).filter((a) => {
    const href = a.getAttribute("href") || "";
    return href.startsWith("/") || href.includes("ahmedpixels");
  });
  items.push({
    label: "Internal Links",
    category: "Links",
    value: `${internal.length} internal links`,
    status: internal.length >= 3 ? "pass" : "warning",
    recommendation: internal.length < 3 ? "Add more internal links to improve site navigation and distribute link equity." : undefined,
  });

  // HTTPS check
  items.push({
    label: "HTTPS",
    category: "Security",
    value: url.startsWith("https") || url.startsWith("/") ? "Secure" : "Not secure",
    status: "pass",
  });

  return items;
}

function getScore(items: AuditItem[]): number {
  const total = items.length;
  const passed = items.filter((i) => i.status === "pass").length;
  const warnings = items.filter((i) => i.status === "warning").length;
  return Math.round(((passed + warnings * 0.5) / total) * 100);
}

const SeoAuditPage = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [auditResults, setAuditResults] = useState<AuditItem[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const runAudit = () => {
    setIsAuditing(true);
    // Audit current document
    setTimeout(() => {
      const results = auditPage(document, window.location.href);
      setAuditResults(results);
      setIsAuditing(false);
      // Expand categories with issues
      const withIssues = new Set(
        results.filter((r) => r.status !== "pass").map((r) => r.category)
      );
      setExpandedCategories(withIssues);
    }, 800);
  };

  useEffect(() => {
    runAudit();
  }, []);

  const score = getScore(auditResults);
  const categories = [...new Set(auditResults.map((r) => r.category))];
  const passCount = auditResults.filter((i) => i.status === "pass").length;
  const warnCount = auditResults.filter((i) => i.status === "warning").length;
  const failCount = auditResults.filter((i) => i.status === "fail").length;

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  const scoreColor =
    score >= 80 ? "text-green-400" : score >= 50 ? "text-yellow-400" : "text-red-400";
  const scoreTrackColor =
    score >= 80 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500";

  return (
    <>
      <Helmet>
        <title>SEO Audit Panel | AhmedPixels</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-[hsl(var(--section-dark))]">
        <Navbar />

        <section className="pt-28 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
                <Search className="w-4 h-4" />
                On-Page SEO Audit
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                SEO Health Check
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Live audit of this page with actionable recommendations to improve rankings.
              </p>
            </div>

            {/* Score Card */}
            <Card className="mb-8 border-primary/10 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Score circle */}
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                      <circle
                        cx="50" cy="50" r="42" fill="none"
                        stroke={score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444"}
                        strokeWidth="8"
                        strokeDasharray={`${score * 2.64} 264`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-2xl font-bold ${scoreColor}`}>{score}</span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-lg font-semibold text-foreground">Audit Results</h2>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={runAudit}
                        disabled={isAuditing}
                        className="gap-1.5"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isAuditing ? "animate-spin" : ""}`} />
                        Re-scan
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <div>
                          <div className="text-lg font-bold text-green-400">{passCount}</div>
                          <div className="text-[10px] text-muted-foreground">Passed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        <div>
                          <div className="text-lg font-bold text-yellow-400">{warnCount}</div>
                          <div className="text-[10px] text-muted-foreground">Warnings</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <div>
                          <div className="text-lg font-bold text-red-400">{failCount}</div>
                          <div className="text-[10px] text-muted-foreground">Failed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Audit Items by Category */}
            {isAuditing ? (
              <div className="flex flex-col items-center gap-4 py-16">
                <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                <p className="text-muted-foreground">Analyzing page SEO...</p>
              </div>
            ) : (
              <div className="space-y-3">
                {categories.map((cat) => {
                  const catItems = auditResults.filter((r) => r.category === cat);
                  const catPassed = catItems.filter((i) => i.status === "pass").length;
                  const isExpanded = expandedCategories.has(cat);

                  return (
                    <Card key={cat} className="border-primary/5 bg-card/30 backdrop-blur overflow-hidden">
                      <button
                        onClick={() => toggleCategory(cat)}
                        className="w-full flex items-center justify-between p-4 hover:bg-primary/5 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {CATEGORY_ICON[cat] || <Globe className="w-4 h-4" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm">{cat}</h3>
                            <p className="text-xs text-muted-foreground">
                              {catPassed}/{catItems.length} checks passed
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(catPassed / catItems.length) * 100}
                            className="w-20 h-1.5"
                          />
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="border-t border-primary/5">
                          {catItems.map((item, idx) => (
                            <div
                              key={idx}
                              className="px-4 py-3 border-b border-primary/5 last:border-b-0"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5">{STATUS_ICON[item.status]}</div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="font-medium text-sm text-foreground">{item.label}</span>
                                    <Badge
                                      variant={item.status === "pass" ? "secondary" : "outline"}
                                      className={`text-[10px] px-1.5 py-0 ${
                                        item.status === "fail"
                                          ? "border-red-500/30 text-red-400"
                                          : item.status === "warning"
                                          ? "border-yellow-500/30 text-yellow-400"
                                          : ""
                                      }`}
                                    >
                                      {item.status}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-muted-foreground break-all">{item.value}</p>
                                  {item.recommendation && (
                                    <div className="mt-2 flex items-start gap-2 px-3 py-2 rounded-md bg-primary/5 border border-primary/10">
                                      <Zap className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                      <p className="text-xs text-primary/80">{item.recommendation}</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default SeoAuditPage;
