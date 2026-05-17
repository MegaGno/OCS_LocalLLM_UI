import Sidebar from "../components/Sidebar.tsx"
import Header from "../components/Header.tsx"
import ChatWindow from "../components/ChatWindow.tsx"
import PromptInput from "../components/PromptInput.tsx"

export default function ChatPage() {
  return (
    <div className="h-screen flex bg-zinc-900">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <ChatWindow />

        <PromptInput />
      </div>
    </div>
  )
}