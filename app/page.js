'use client'
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

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: 'You', timestamp: 'now' };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const toggleBookmark = (index) => {
    setBookmarked((prev) => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]));
  };

  return (
    <div>
      <div className="min-h-screen bg-indigo-100 dark:bg-gray-800 flex flex-col items-center justify-center p-8 transition-colors duration-500">
        <div className="w-full max-w-7xl h-[80vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl grid grid-cols-3 overflow-hidden">
          <Inbox messages={messages} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <ChatDashboard
            messages={messages}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            bookmarked={bookmarked}
            toggleBookmark={toggleBookmark}
            activeIndex={activeIndex}
          />
          {showAICoPilot && <AICoPilot onClose={() => setShowAICoPilot(false)} />}
        </div>
      </div>
    </div>
  );
}

