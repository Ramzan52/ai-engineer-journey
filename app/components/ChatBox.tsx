"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage from "./chat/ChatMessage";
import TypingLoader from "./chat/TypingLoader";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
  time: string;
};

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  if (messages.length > 0 || loading) {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }
}, [messages, loading]);

  function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: message.trim(),
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.text,
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: data.reply,
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text: "Sorry, something went wrong. Please try again.",
        time: getCurrentTime(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  function clearChat() {
    setMessages([]);
  }

  return (
    <div
      id="ai-assistant"
      className="bg-gray-950 border border-gray-800 rounded-2xl p-4 md:p-6"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold">Portfolio Assistant</h3>
          <p className="text-sm text-gray-500">
            Ask about my skills, projects, experience, budget, or contact
            details
          </p>
        </div>

        {messages.length > 0 && (
          <button
            onClick={clearChat}
            disabled={loading}
            className="text-sm border border-gray-700 px-4 py-2 rounded-xl text-gray-300 hover:border-white disabled:opacity-50"
          >
            Clear Chat
          </button>
        )}
      </div>

      <div className="h-[420px] overflow-y-auto space-y-4 pr-1 md:pr-2">
        {messages.length === 0 && (
          <div className="text-gray-500 bg-gray-900 border border-gray-800 p-4 rounded-xl space-y-3">
            <p className="font-semibold text-white">Suggested Questions</p>

            <div className="flex flex-wrap gap-2">
              {[
                "Show my skills",
                "Tell me about my projects",
                "Show me code",
                "Tell me about my experience",
                "What is my budget?",
                "How can someone contact me?",
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setMessage(q)}
                  className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-xl text-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            role={msg.role}
            text={msg.text}
            time={msg.time}
          />
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold shrink-0">
              AI
            </div>

            <div className="bg-gray-900 text-gray-400 border border-gray-800 p-4 rounded-2xl">
              <TypingLoader />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          placeholder="Ask about my skills, projects, budget, or contact details..."
          className="flex-1 p-3 bg-black border border-gray-700 rounded-xl outline-none disabled:opacity-50"
        />

        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="bg-white text-black px-6 py-3 sm:py-0 rounded-xl font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}