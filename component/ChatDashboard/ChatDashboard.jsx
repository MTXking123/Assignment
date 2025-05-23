
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function ChatDashboard({ messages, input, setInput, sendMessage, bookmarked, toggleBookmark, activeIndex }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = messages[activeIndex];

  const onEmojiClick = (emojiData) => {
    setInput((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <main className="flex flex-col h-full justify-between relative dark:bg-gray-900 dark:text-white">
      {mounted && (
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition duration-300"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      )}

      <div className="p-6 space-y-4 overflow-y-auto">
        {messages.filter((_, i) => i === activeIndex).map((msg, i) => (
          <div key={i} className="space-y-2">
            <div className="bg-indigo-300 text-black p-3 rounded-md w-fit max-w-[75%]">
              {msg.text}
            </div>
            <div className="bg-indigo-300 text-black p-3 rounded-md w-fit max-w-[75%] self-end ml-auto">
              Let me just look into this for you, {msg.sender}.
            </div>
          </div>
        ))}
      </div>

      <div className="border-t  border-gray-200 dark:border-gray-700 p-4 relative">
        <div className="flex items-center space-x-2 ">
          <button
            className="text-xl text-gray-600 dark:text-gray-300"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <BsEmojiSmile />
          </button>
          <button
            className="text-xl text-gray-600 dark:text-gray-300"
            onClick={() => toggleBookmark(activeIndex)}
          >
            <BsBookmark />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-16 left-4 z-50">
              <EmojiPicker theme={theme} onEmojiClick={onEmojiClick} />
            </div>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none bg-white dark:bg-gray-800 text-black dark:text-white"
          />
          <button onClick={sendMessage} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Send
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick />
    </main>
  );
}
