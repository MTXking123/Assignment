
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default function ChatDashboard({ messages, input, setInput, sendMessage, bookmarked, toggleBookmark, activeIndex }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const current = messages[activeIndex];

  const onEmojiClick = (emojiData) => {
    setInput((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <main className="flex flex-col h-full justify-between relative bg-white text-black w-full">
      <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
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

      <div className="border-t border-gray-200 p-3 sm:p-4 relative w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <button
              className="text-xl text-gray-600"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <BsEmojiSmile />
            </button>
            <button
              className="text-xl text-gray-600"
              onClick={() => toggleBookmark(activeIndex)}
            >
              <BsBookmark />
            </button>
          </div>

          {showEmojiPicker && (
            <div className="absolute bottom-16 left-4 z-50">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white text-black"
          />
          <button onClick={sendMessage} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full sm:w-auto">
            Send
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick />
    </main>
  );
}
