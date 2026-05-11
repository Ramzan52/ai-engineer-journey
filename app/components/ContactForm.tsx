"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass-card rounded-3xl p-5 md:p-8 space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full p-3 bg-black/50 border border-white/10 rounded-xl outline-none focus:border-blue-400"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="w-full p-3 bg-black/50 border border-white/10 rounded-xl outline-none focus:border-purple-400"
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        rows={6}
        className="w-full p-3 bg-black/50 border border-white/10 rounded-xl outline-none focus:border-pink-400"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && <p className="text-sm text-gray-300">{status}</p>}
    </div>
  );
}