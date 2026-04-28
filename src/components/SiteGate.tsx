import { useState, useEffect, FormEvent } from "react";
import { Lock, Mail, Eye, EyeOff, Sparkles, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ACCESS_EMAIL = "ahmedpixelspro@gmail.com";
const ACCESS_PASSWORD = "@Pixels7078";
const STORAGE_KEY = "ap_site_access_v1";

interface SiteGateProps {
  children: React.ReactNode;
}

const SiteGate = ({ children }: SiteGateProps) => {
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const granted = localStorage.getItem(STORAGE_KEY);
      if (granted === "true") setAuthorized(true);
    } catch {
      // ignore
    }
    setChecked(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === ACCESS_EMAIL.toLowerCase() &&
        password === ACCESS_PASSWORD
      ) {
        try {
          localStorage.setItem(STORAGE_KEY, "true");
        } catch {
          // ignore
        }
        toast.success("Access granted. Welcome back!");
        setAuthorized(true);
      } else {
        toast.error("Invalid credentials. Access denied.");
      }
      setSubmitting(false);
    }, 600);
  };

  if (!checked) return null;
  if (authorized) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] min-h-screen w-full overflow-auto bg-[hsl(270_30%_6%)] text-foreground">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(270_85%_58%/0.25),transparent_55%),radial-gradient(circle_at_80%_80%,hsl(280_90%_65%/0.2),transparent_55%),radial-gradient(circle_at_50%_100%,hsl(290_80%_55%/0.15),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0_0%_100%/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0_0%_100%/0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(280_90%_75%)]" />
              Under Construction
            </div>
            <h1 className="bg-gradient-to-r from-white via-[hsl(280_90%_85%)] to-[hsl(270_85%_70%)] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Ahmed Pixels
            </h1>
            <p className="mt-2 text-sm text-white/60">
              Private access. Sign in to continue.
            </p>
          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_30px_80px_-20px_rgba(120,40,200,0.45)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[hsl(270_85%_58%/0.35)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[hsl(280_90%_65%/0.3)] blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(270_85%_58%)] to-[hsl(280_90%_65%)] shadow-lg shadow-[hsl(270_85%_58%/0.4)]">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Restricted Area
                  </h2>
                  <p className="text-xs text-white/50">
                    Authorized personnel only
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="gate-email"
                    className="text-xs font-medium uppercase tracking-wider text-white/70"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <Input
                      id="gate-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="h-11 border-white/10 bg-white/5 pl-10 text-white placeholder:text-white/30 focus-visible:border-[hsl(280_90%_65%)] focus-visible:ring-[hsl(280_90%_65%/0.3)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="gate-password"
                    className="text-xs font-medium uppercase tracking-wider text-white/70"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <Input
                      id="gate-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="h-11 border-white/10 bg-white/5 pl-10 pr-10 text-white placeholder:text-white/30 focus-visible:border-[hsl(280_90%_65%)] focus-visible:ring-[hsl(280_90%_65%/0.3)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white/80"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-11 w-full bg-gradient-to-r from-[hsl(270_85%_58%)] to-[hsl(280_90%_65%)] text-base font-semibold text-white shadow-lg shadow-[hsl(270_85%_58%/0.4)] transition-all hover:scale-[1.01] hover:from-[hsl(270_85%_62%)] hover:to-[hsl(280_90%_70%)] hover:shadow-[hsl(270_85%_58%/0.6)]"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Unlock Site"
                  )}
                </Button>
              </form>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] uppercase tracking-widest text-white/40">
                  Or
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <a
                href="https://wa.me/923174718027?text=Hi%20Ahmed%2C%20I%27d%20like%20to%20request%20access%20to%20view%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 text-sm font-semibold text-white transition-all hover:scale-[1.01] hover:border-[hsl(280_90%_65%/0.5)] hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-[hsl(280_90%_75%)]" />
                Request Access to View Portfolio
              </a>

              <p className="mt-5 text-center text-[11px] text-white/40">
                This site is currently under construction.
                <br />
                Click above to request access from the owner.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-white/30">
            © {new Date().getFullYear()} Ahmed Pixels — All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteGate;
