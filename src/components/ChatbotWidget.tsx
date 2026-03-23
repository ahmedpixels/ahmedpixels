import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import ahmedPortrait from "@/assets/ahmed-portrait-optimized.jpg";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chatbot`;
const STORAGE_KEY = "ahmedpixels_chat_history";
const AUTO_POPUP_KEY = "ahmedpixels_auto_popup_shown";

const QUICK_ACTIONS = [
  { label: "📋 Services", message: "What services does Ahmed offer?" },
  { label: "💰 Pricing", message: "What are your pricing packages and rates?" },
  { label: "🚀 Portfolio", message: "Show me Ahmed's recent projects and results" },
  { label: "📞 Book a Call", message: "I want to schedule a free consultation call" },
];

const loadMessages = (): Message[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveMessages = (msgs: Message[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {}
};

const messageVariants = {
  initial: { opacity: 0, y: 12, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(loadMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pulseButton, setPulseButton] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { saveMessages(messages); }, [messages]);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);

  // Pulse animation stop after 10s
  useEffect(() => {
    const t = setTimeout(() => setPulseButton(false), 10000);
    return () => clearTimeout(t);
  }, []);

  // Auto popup after 30s
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(AUTO_POPUP_KEY);
    if (alreadyShown) return;
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
        sessionStorage.setItem(AUTO_POPUP_KEY, "1");
      }
    }, 30000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const streamChat = useCallback(async (allMessages: Message[]) => {
    setIsLoading(true);
    let assistantSoFar = "";

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok || !resp.body) {
        upsertAssistant("Sorry, I'm having trouble connecting. Please try WhatsApp: [+92 321 6479192](https://wa.me/ahmedpixels)");
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch {
      upsertAssistant("Connection error. Try WhatsApp: [+92 321 6479192](https://wa.me/ahmedpixels)");
    }
    setIsLoading(false);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isLoading) return;
      const userMsg: Message = { role: "user", content: text.trim() };
      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setInput("");
      streamChat(newMessages);
    },
    [messages, isLoading, streamChat]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-primary/40 flex items-center justify-center transition-shadow overflow-hidden border-2 border-primary/60 bg-background ${pulseButton ? "animate-pulse" : ""}`}
            aria-label="Open chat"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
            <MessageCircle className="w-6 h-6 text-primary relative z-10" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[540px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20"
            style={{ background: "hsl(270, 20%, 4%)" }}
          >
            {/* Header */}
            <div className="relative px-4 py-3 border-b border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-purple-600/30" />
              <div className="absolute inset-0 backdrop-blur-xl" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={ahmedPortrait}
                      alt="Ahmed"
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/40 ring-2 ring-primary/20 ring-offset-1 ring-offset-background"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-white flex items-center gap-1.5">
                      Ahmed's AI Assistant
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </p>
                    <p className="text-[11px] text-white/60">WordPress & SEO Expert • Online</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {messages.length > 0 && (
                    <button
                      onClick={clearChat}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[11px] text-white/60 hover:text-white/90"
                      aria-label="Clear chat"
                      title="Clear chat history"
                    >
                      🗑️
                    </button>
                  )}
                  <a
                    href="https://wa.me/ahmedpixels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Call on WhatsApp"
                  >
                    <Phone className="w-4 h-4 text-white/70 hover:text-green-400 transition-colors" />
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4 text-white/70" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin" style={{ background: "hsl(270, 20%, 5%)" }}>
              {/* Welcome */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-2.5">
                    <img src={ahmedPortrait} alt="" className="w-7 h-7 rounded-full object-cover border border-primary/30 mt-0.5" />
                    <div
                      className="rounded-2xl rounded-tl-md px-4 py-3 text-sm max-w-[85%] text-white/90 leading-relaxed"
                      style={{ background: "hsl(270, 20%, 10%)" }}
                    >
                      👋 Assalam-o-Alaikum! I'm Ahmed's AI assistant. I can help you with services, pricing, portfolio, or schedule a free consultation. How can I help?
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-9">
                    {QUICK_ACTIONS.map((action, idx) => (
                      <motion.button
                        key={action.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.08 }}
                        onClick={() => sendMessage(action.message)}
                        className="text-xs px-3.5 py-2 rounded-xl border border-primary/20 hover:border-primary/50 hover:bg-primary/10 text-white/75 hover:text-white transition-all duration-200 hover:shadow-sm hover:shadow-primary/10"
                        style={{ background: "hsl(270, 20%, 8%)" }}
                      >
                        {action.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    variants={messageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <img src={ahmedPortrait} alt="" className="w-6 h-6 rounded-full object-cover border border-primary/20 mr-2 mt-1 flex-shrink-0" />
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "rounded-br-md text-white"
                          : "rounded-bl-md text-white/90"
                      }`}
                      style={{
                        background: msg.role === "user"
                          ? "linear-gradient(135deg, hsl(270, 85%, 55%), hsl(290, 85%, 60%))"
                          : "hsl(270, 20%, 10%)",
                      }}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose prose-sm prose-invert max-w-none [&_p]:m-0 [&_p]:mb-1.5 [&_p:last-child]:mb-0 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_ul]:mt-1 [&_ul]:mb-1 [&_li]:m-0 [&_strong]:text-white">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2.5"
                >
                  <img src={ahmedPortrait} alt="" className="w-6 h-6 rounded-full object-cover border border-primary/20 mt-1" />
                  <div className="rounded-2xl rounded-bl-md px-4 py-3" style={{ background: "hsl(270, 20%, 10%)" }}>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 rounded-full bg-primary/50"
                          animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-primary/15" style={{ background: "hsl(270, 20%, 4%)" }}>
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-primary/30 border border-primary/15 transition-all duration-200 focus:border-primary/40"
                  style={{ background: "hsl(270, 20%, 8%)" }}
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white flex items-center justify-center disabled:opacity-30 transition-opacity shadow-lg shadow-primary/20"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
              <p className="text-[10px] text-white/20 text-center mt-2">Powered by AhmedPixels AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
