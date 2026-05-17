import MessageBubble from "./MessageBubble.tsx"
import { mockMessages } from "../data/mockMessages.ts"

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {mockMessages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
        />
      ))}
    </div>
  )
}