'use client';
import { useState, useEffect } from 'react';
import Inbox from '../component/Inbox/Inbox';
import ChatDashboard from '../component/ChatDashboard/ChatDashboard';
import AICoPilot from '../component/AICoPilot/AICoPilot';
import { toast } from 'react-toastify';

export default function Home() {
  const [messages, setMessages] = useState([
    { sender: 'Luis - Github', text: 'Hey! I have a question...', timestamp: '45m' },
    { sender: 'Ivan - Nike', text: 'Hi there, I have a question.', timestamp: '30m' }
  ]);
  const [input, setInput] = useState('');
  const [bookmarked, setBookmarked] = useState([]);
  const [showAICoPilot, setShowAICoPilot] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: 'You', timestamp: 'now' };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const toggleBookmark = (index) => {
    setBookmarked((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-20 z-0" />

      {/* Page Transition */}
      <div
        className={`relative z-10 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-7xl h-[80vh] bg-white rounded-lg shadow-2xl 
                          grid grid-cols-1 sm:grid-cols-3 overflow-hidden">
            <div className="sm:col-span-1">
              <Inbox messages={messages} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
            <div className="sm:col-span-1">
              <ChatDashboard
                messages={messages}
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
                bookmarked={bookmarked}
                toggleBookmark={toggleBookmark}
                activeIndex={activeIndex}
              />
            </div>
            <div className="hidden sm:block sm:col-span-1">
              {showAICoPilot && <AICoPilot onClose={() => setShowAICoPilot(false)} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
