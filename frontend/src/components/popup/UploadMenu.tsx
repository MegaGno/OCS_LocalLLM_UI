export default function UploadMenu() {
  return (
    <div className="
      absolute
      bottom-32
      left-8
      bg-white
      shadow-xl
      rounded-3xl
      p-6
      w-[250px]
      z-50
    ">

      <button className="flex gap-4 w-full p-4 hover:bg-gray-100 rounded-xl">
        📄 อัปโหลดไฟล์
      </button>

      <button className="flex gap-4 w-full p-4 hover:bg-gray-100 rounded-xl">
        🖼️ อัปโหลดรูป
      </button>

    </div>
  );
}