"use client";

import { useEffect, useMemo, useState } from "react";

const starters = [
  "How can I contact your team?",
  "What services do you offer?",
  "Can you help me with pricing?"
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number; startX: number; startY: number } | null>(null);
  const [holdTimer, setHoldTimer] = useState<number | null>(null);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I’m your AI assistant. Ask me anything about the business, services, or how to reach the team."
    }
  ]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const replyToUser = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "Thanks for asking. I can help with questions about our services, contact options, and support. I can answer in real time and keep track of common questions so we can improve future responses."
      }
    ]);
  };

  const handleQuickReply = (text: string) => {
    replyToUser(text);
  };

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    replyToUser(input);
    setInput("");
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    const timer = window.setTimeout(() => {
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY, startX: position.x, startY: position.y });
    }, 250);

    setHoldTimer(timer);
  };

  const handlePointerUp = () => {
    if (holdTimer) {
      window.clearTimeout(holdTimer);
      setHoldTimer(null);
    }
    setDragging(false);
    setDragStart(null);
  };

  useEffect(() => {
    if (!dragging || !dragStart) return;

    const handlePointerMove = (event: PointerEvent) => {
      const nextX = dragStart.startX + (event.clientX - dragStart.x);
      const nextY = dragStart.startY + (event.clientY - dragStart.y);

      setPosition({
        x: Math.max(12, Math.min(window.innerWidth - 320, nextX)),
        y: Math.max(12, Math.min(window.innerHeight - 220, nextY))
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [dragging, dragStart]);

  useEffect(() => {
    return () => {
      if (holdTimer) {
        window.clearTimeout(holdTimer);
      }
    };
  }, [holdTimer]);

  const panelStyle = useMemo(() => ({
    transform: `translate(${position.x}px, ${position.y}px)`
  }), [position]);

  return (
    <div className="ai-assistant" style={panelStyle}>
      <button type="button" className="ai-assistant__toggle" onClick={() => setOpen((value) => !value)}>
        {open ? "Hide" : "Ask NexAI"}
      </button>

      {open && (
        <div className="ai-assistant__panel">
          <div className="ai-assistant__header" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
            <div>
              <strong>AI Help</strong>
              <div className="ai-assistant__subtitle">Live support</div>
            </div>
            <button type="button" className="ai-assistant__close" onClick={() => setOpen(false)} aria-label="Close AI assistant">
              ×
            </button>
          </div>

          <div className="ai-assistant__body">
            <div className="ai-assistant__notice">
              Need help right now? Ask me anything about the company, services, or contact options.
            </div>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`ai-assistant__bubble ai-assistant__bubble--${message.role}`}>
                {message.content}
              </div>
            ))}
          </div>

          <div className="ai-assistant__quick-replies">
            {starters.map((text) => (
              <button key={text} type="button" onClick={() => handleQuickReply(text)}>
                {text}
              </button>
            ))}
          </div>

          <form className="ai-assistant__composer" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
