const chats = [
  "ฉันจะขโมยสาย LAN ยังไง ไม่ให้โดนจับได้",
  "ฉันจะโดนไล่ออกไหม ถ้าแทงหวยใต้ดิน",
  "อยากจะขอทุนเรียนดี มีเงื่อนไขและขั้นตอนอะไรบ้าง",
  "วิธีเชื่อมต่อ WiFi KU แบบฉบับง่ายๆไม่ยากเด็กอ่านก็รู้เรื่อง hsdufiufushfhdjvnjNVjidnsfiihsifjsgisrmgnfjbnfdgnsanvfj vnngeosjgopasmbinbundbnfxobnxiongblungsoGhdnignfjnvjxzndjvnfugnushgidfjgodhtnhvulcjvspjrgonrihBoofnruogshsijgjrniashaglrtjgoainhgfnlsjfrebgofhgoirnosap[fiogan,fnoixzbrigha",
  "สมัคร VPN มหาลัยยังไง ต้องเสียตังค์ไหม",
  "ฉันได้ 5A แต่ทำไมยังไม่ได้เงินทุนเรียนดี",
  "วิธีเดินทางด้วยรถเมล์จากหอพักไปคณะมีอะไรบ้าง",
  "ชุดนักศึกษามีอะไรบ้าง ต้องซื้อเองไหม หรือมหาลัยมีให้",
  "การลงทะเบียนแบบเดรดิตและออดิทคืออะไร ต่างกันยังไง",
];

export default function ChatHistory() {
  return (
    <div className="flex flex-col h-full  w-full min-w-0 overflow-y-auto">

      <h2 className="
        !text-lg
        font-bold
        !mb-5
        flex
        items-start
      ">
        เมื่อเร็วๆนี้
      </h2>

      {chats.map((chat, index) => (
        <button
          key={index}
          className="
            w-full
            text-left
            hover:bg-[#3a3f44]
            rounded-lg
            p-2
            transition
            mb-2
          "
        >
          <p
            className="
              text-sm
              text-gray-200
              line-clamp-2
              break-words
              whitespace-normal
            "
          >
            {chat}
          </p>
        </button>
    ))}
    </div>
  );
}