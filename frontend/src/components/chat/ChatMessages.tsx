import MessageBubble from "./MessageBubble";
import { mockMessages } from "../../data/mockMessages";

export default function ChatMessages() {
  return (
    <div
      className="
        overflow-y-auto
        px-8
        py-6
        h-full
      "
    >

      {mockMessages.map((message) => (
        <MessageBubble
          key={message.id}
          text={message.text}
          sender={message.sender}
        />
      ))}

    </div>
  );
}