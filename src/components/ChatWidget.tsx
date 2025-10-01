import { useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const API_BASE = "https://efarm-bot.onrender.com";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Xin chào! Hỏi tôi về sản phẩm/giá từ kho tri thức." },
  ]);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const answer = data?.answer || "(no reply)";
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    } catch (e: any) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Xin lỗi, có lỗi xảy ra. Vui lòng thử lại." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="h-12 w-12 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center hover:bg-green-700 transition"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="w-80 sm:w-96 h-96 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b">
            <div className="font-medium">StupidBot</div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={
                    m.role === "user"
                      ? "inline-block bg-green-600 text-white px-3 py-2 rounded-lg whitespace-pre-wrap"
                      : "inline-block bg-white border px-3 py-2 rounded-lg whitespace-pre-wrap"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-white border px-3 py-2 rounded-lg">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>
          <div className="p-2 border-t flex items-center gap-2">
            <input
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700 disabled:opacity-50"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


