export default function Sidebar() {
  return (
    <div className="w-64 bg-zinc-950 border-r border-zinc-800 p-4">
      <h1 className="text-white text-xl font-bold mb-6">
        KU Chatbot
      </h1>

      <button className="w-full bg-zinc-800 hover:bg-zinc-700 transition text-white p-3 rounded-xl">
        + New Chat
      </button>
    </div>
  )
}