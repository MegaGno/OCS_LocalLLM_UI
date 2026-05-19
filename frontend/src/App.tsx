import Sidebar from "./components/sidebar/Sidebar.tsx";
import ChatHeader from "./components/chat/ChatHeader.tsx";
import ChatMessages from "./components/chat/ChatMessages.tsx";
import ChatInput from "./components/chat/ChatInput.tsx";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* ฝั่งซ้าย: Sidebar */}
      <Sidebar />

      {/* ฝั่งขวา: พื้นที่แชททั้งหมด */}
      <div className="flex flex-col flex-1 h-screen bg-[#f4f4f4] min-w-0">
        {/* หัวแชท - ล็อกความสูงไว้ */}
        <div className="flex-none">
          <ChatHeader />
        </div>

        {/* รายการข้อความ - ให้ยืดเต็มที่ตรงกลาง และยอมหดตัวเพื่อตัด Scrollbar */}
        <div className="flex-1 min-h-0">
          <ChatMessages />
        </div>

        {/* ช่องกรอกข้อความ - ล็อกให้อยู่ล่างสุดเสมอ */}
        <div className="flex-none">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default App;
