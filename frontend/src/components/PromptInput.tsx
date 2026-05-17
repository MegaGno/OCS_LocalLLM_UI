export default function PromptInput() {
  return (
    <div className="border-t border-zinc-800 p-4 bg-zinc-950">
      <div className="flex items-center gap-2 bg-zinc-900 rounded-2xl px-4 py-3">
        <input
          type="text"
          placeholder="พิมพ์ข้อความ..."
          className="flex-1 bg-transparent outline-none text-white"
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl text-white"
        >
          ส่ง
        </button>
      </div>
    </div>
  )
}