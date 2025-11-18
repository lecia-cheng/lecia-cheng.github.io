'use client';

import { useState, useEffect } from 'react';

const conversation = [
  { text: "What program are you in?", isUser: false },
  { text: "4th-year dual degree CS + Business", isUser: true },
  { text: "When are you graduating?", isUser: false },
  { text: "April 2027!", isUser: true }
];

export default function ChatBubbles() {
  const [messages, setMessages] = useState<typeof conversation>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= conversation.length) return;

    // Show typing indicator first
    const typingDelay = currentStep === 0 ? 400 : 600;
    const typingTimer = setTimeout(() => {
      setShowTyping(true);
    }, typingDelay);

    // Then show the message after typing
    const messageDelay = typingDelay + 800;
    const messageTimer = setTimeout(() => {
      setMessages(prev => [...prev, conversation[currentStep]]);
      setShowTyping(false);
      setCurrentStep(prev => prev + 1);
    }, messageDelay);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, [currentStep]);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[650px]">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`px-6 py-4 rounded-[20px] max-w-[80%] break-words text-lg ${
            msg.isUser
              ? 'bg-[#007bff] text-white self-end rounded-br-[4px]'
              : 'bg-[#e5e5e5] self-start rounded-bl-[4px]'
          }`}
          style={{
            animation: 'slideIn 0.3s ease-out'
          }}
        >
          {msg.text}
        </div>
      ))}
      {showTyping && currentStep < conversation.length && (
        <div
          className={`px-6 py-4 rounded-[20px] ${
            conversation[currentStep]?.isUser
              ? 'bg-[#007bff] self-end rounded-br-[4px]'
              : 'bg-[#e5e5e5] self-start rounded-bl-[4px]'
          }`}
        >
          <div className="flex gap-2 items-center">
            <span 
              className={`w-3 h-3 rounded-full ${
                conversation[currentStep]?.isUser ? 'bg-white/70' : 'bg-black/40'
              }`}
              style={{ 
                animation: 'typing 1.4s infinite',
                animationDelay: '0s'
              }}
            ></span>
            <span 
              className={`w-3 h-3 rounded-full ${
                conversation[currentStep]?.isUser ? 'bg-white/70' : 'bg-black/40'
              }`}
              style={{ 
                animation: 'typing 1.4s infinite',
                animationDelay: '0.2s'
              }}
            ></span>
            <span 
              className={`w-3 h-3 rounded-full ${
                conversation[currentStep]?.isUser ? 'bg-white/70' : 'bg-black/40'
              }`}
              style={{ 
                animation: 'typing 1.4s infinite',
                animationDelay: '0.4s'
              }}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
}

