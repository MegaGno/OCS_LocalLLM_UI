import type { Message } from "../types/chat"

interface Props {
  message: Message
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user"

  return (
    <div
      className={`flex mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow ${
          isUser
            ? "bg-blue-500 text-white"
            : "bg-zinc-800 text-zinc-100"
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}