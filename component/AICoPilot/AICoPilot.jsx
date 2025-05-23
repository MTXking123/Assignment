export default function AICoPilot({ onClose }) {
  return (
    <aside className="flex flex-col justify-between h-full p-6 border-l border-gray-200 bg-white text-black w-full sm:w-[300px]">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-700">AI Co-Pilot</h2>
          <button onClick={onClose} className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800">
            Close
          </button>
        </div>
        <div className="text-sm text-gray-500">
          <p className="mb-4">Hi, I'm Fin AI Copilot. Ask me anything about this conversation.</p>
        </div>
      </div>
      <div className="text-sm">
        <p className="mb-1 text-gray-700 font-semibold">Suggested</p>
        <button className="text-indigo-600 hover:underline text-left w-full mb-2">💬 How do I get a refund?</button>
        <input
          placeholder="Ask a question..."
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none bg-white text-black"
        />
      </div>
    </aside>
  );
}

