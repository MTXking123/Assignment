export default function Inbox({ messages, activeIndex, setActiveIndex }) {
  return (
    <aside className="w-full h-full overflow-y-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 px-4 py-2">Your inbox</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {messages.map((msg, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
              activeIndex === i ? 'bg-white dark:bg-gray-700 border-l-4 border-indigo-500' : ''
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white">{msg.sender}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{msg.timestamp}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{msg.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}