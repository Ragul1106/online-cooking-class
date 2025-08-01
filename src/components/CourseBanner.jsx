import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPaperclip, FiUser } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';
import defaultReplies from '../data/chatData';

const CourseBanner = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [replyIndex, setReplyIndex] = useState(1);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [defaultReplies[0]];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const toggleChat = () => setIsChatOpen(prev => !prev);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { id: Date.now(), sender: 'You', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    if (replyIndex < defaultReplies.length) {
      const nextReply = defaultReplies[replyIndex];
      setTimeout(() => {
        setMessages(prev => [...prev, nextReply]);
        setReplyIndex(prev => prev + 1);
      }, 1000);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="bg-[#FFF5ED] py-10 flex flex-col items-center justify-center px-4 text-center relative">
      <p className="text-[28px] md:text-[36px] font-semibold text-black leading-relaxed max-w-6xl">
        Homemakers to busy executives, budding chefs to food entrepreneurs,
        grandparents to moms, health conscious people or foodies – there’s a course for all.
      </p>

      <div className="mt-8 w-full max-w-6xl flex items-center justify-center relative">
        <button
          onClick={() => navigate("/courses")}
          className="mx-auto block bg-[#b14444] hover:bg-[#d57a66] hover:text-red-300 text-white font-semibold py-2 px-8 rounded-3xl transition duration-300 uppercase tracking-wide text-sm md:text-lg"
        >
          VIEW COURSES
        </button>

        <div className="absolute right-0 cursor-pointer" onClick={toggleChat}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-[#AED636]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 4h16v12H5.17L4 17.17V4zm0-2a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4z" />
            <path d="M6 9h12v2H6zM6 6h12v2H6z" />
          </svg>
        </div>
      </div>

      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#FFF2E9] rounded-xl shadow-xl w-[360px] h-[550px] max-w-full relative flex flex-col">

            <div className="flex justify-between items-start px-4 py-3 border-b">
              <div className="flex flex-col items-start gap-1">
                <FiUser className="text-2xl text-gray-700" />
                <h2 className="text-lg font-semibold text-gray-800">Inbox</h2>
              </div>
              <button
                onClick={toggleChat}
                className="text-2xl font-bold text-gray-600 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
              {messages.map(msg => (
                <div key={msg.id} className="flex items-start text-sm">
                  <span className="bg-red-400 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">
                    {msg.sender[0]}
                  </span>
                  <p className="bg-white rounded-xl px-3 py-2 text-gray-800">
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t px-4 py-3 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="REPLY HERE"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button title="Attach file" className="text-xl text-gray-500 hover:text-gray-800">
                <FiPaperclip />
              </button>
              <button title="Emoji" className="text-xl text-gray-500 hover:text-gray-800">
                <BsEmojiSmile />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseBanner;
