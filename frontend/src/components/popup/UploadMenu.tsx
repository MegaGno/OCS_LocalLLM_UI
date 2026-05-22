import UploadIcon from '../../assets/UploadIcon.png';

export default function UploadMenu() {
  return (
    <div className="
      absolute
      bottom-14
      left-5
      bg-white
      shadow-xl
      rounded-3xl
      p-2
      w-[250px]
      z-50
      border border-gray-200
    ">

      <button className="flex gap-4 w-full p-4 hover:bg-gray-100 rounded-xl">
        <img src={UploadIcon} alt="Upload Icon" className="w-6 h-6" />
        อัปโหลดไฟล์
      </button>

    </div>
  );
}