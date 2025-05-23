export default function Inbox({ messages, activeIndex, setActiveIndex }) {
  return (
    <aside className="w-full sm:w-[300px] h-full overflow-y-auto bg-white text-black border-r border-gray-200">
      <h2 className="text-sm font-semibold text-gray-600 px-4 py-2">Your inbox</h2>
      <ul className="divide-y divide-gray-200">
        {messages.map((msg, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
              activeIndex === i ? 'bg-white border-l-4 border-indigo-500' : ''
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">{msg.sender}</span>
              <span className="text-xs text-gray-500">{msg.timestamp}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{msg.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
