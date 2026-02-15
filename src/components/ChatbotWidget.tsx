import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import ahmedPortrait from "@/assets/ahmed-portrait.png";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chatbot`;

const QUICK_ACTIONS = [
  { label: "📋 Services", message: "What services does Ahmed offer?" },
  { label: "💰 Pricing", message: "What are your pricing ranges?" },
  { label: "📞 Schedule Call", message: "I want to schedule a call with Ahmed" },
];

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
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
        upsertAssistant("Sorry, I'm having trouble connecting. Please try WhatsApp: [+92 321 6479192](https://wa.me/923216479192)");
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
      upsertAssistant("Connection error. Try WhatsApp: [+92 321 6479192](https://wa.me/923216479192)");
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

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow overflow-hidden border-2 border-primary"
            style={{ background: "hsl(270, 20%, 6%)" }}
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 text-primary" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 bg-primary" style={{ borderColor: "hsl(270, 20%, 6%)" }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-3rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-primary/30"
            style={{ background: "hsl(270, 20%, 4%)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-primary/20"
              style={{ background: "linear-gradient(135deg, hsl(270, 85%, 58%) 0%, hsl(290, 90%, 65%) 100%)" }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={ahmedPortrait}
                  alt="Ahmed"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <p className="font-semibold text-sm text-white">Ahmed's Assistant</p>
                  <p className="text-[11px] text-white/80">WordPress & SEO Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <a
                  href="https://wa.me/923216479192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Call on WhatsApp"
                >
                  <Phone className="w-4 h-4 text-white" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: "hsl(270, 20%, 6%)" }}>
              {/* Welcome */}
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div
                    className="rounded-xl rounded-tl-sm px-3 py-2 text-sm max-w-[85%] text-white/90"
                    style={{ background: "hsl(270, 20%, 12%)" }}
                  >
                    👋 Hi! I'm Ahmed's AI assistant. How can I help you today?
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => sendMessage(action.message)}
                        className="text-xs px-3 py-1.5 rounded-full border border-primary/30 hover:border-primary/60 hover:bg-primary/10 text-white/80 transition-colors"
                        style={{ background: "hsl(270, 20%, 10%)" }}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "rounded-br-sm text-white"
                        : "rounded-bl-sm text-white/90"
                    }`}
                    style={{
                      background: msg.role === "user"
                        ? "linear-gradient(135deg, hsl(270, 85%, 58%), hsl(290, 90%, 65%))"
                        : "hsl(270, 20%, 12%)",
                    }}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&_p]:m-0 [&_a]:text-primary [&_a]:underline">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="rounded-xl rounded-bl-sm px-4 py-2 text-sm" style={{ background: "hsl(270, 20%, 12%)" }}>
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-primary/20" style={{ background: "hsl(270, 20%, 5%)" }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-primary/40 border border-primary/20"
                  style={{ background: "hsl(270, 20%, 10%)" }}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 transition-opacity"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
