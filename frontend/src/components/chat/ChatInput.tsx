import { useState } from "react";
import UploadMenu from "../popup/UploadMenu";
import ModelSelector from "../popup/ModelSelector";

export default function ChatInput() {

  const [showUpload, setShowUpload] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const [selectedModel, setSelectedModel] =
    useState("qwen2.5");

  return (
    <div className="p-6 bg-white border-t">

      <div className="
        relative
        border-2
        rounded-[40px]
        px-8
        py-6
        bg-[#fafafa]
      ">

        {/* Upload popup */}
        {showUpload && (
          <UploadMenu />
        )}

        {/* Model popup */}
        {showModel && (
          <ModelSelector
            onSelect={(model) => {
              setSelectedModel(model);
              setShowModel(false);
            }}
          />
        )}

        {/* Input */}
        <textarea
          placeholder="พิมพ์ข้อความ...."
          className="
            w-full
            outline-none
            resize-none
            text-xl
            bg-transparent
            
          "
        />

        <div className="
          flex
          justify-between
          items-center
          
        ">

          <div className="flex items-center gap-8">

            {/* Upload button */}
            <button
              onClick={() =>
                setShowUpload(!showUpload)
              }
              className="text-xl"
            >
              +
            </button>

            {/* Model selector */}
            <button
              onClick={() =>
                setShowModel(!showModel)
              }
              className="
                underline
                text-xl
              "
            >
              {"< " + selectedModel + " >"}
            </button>

          </div>

          {/* Send */}
          <button
            className="
              bg-[#006C68]
              px-6
              py-4
              rounded-3xl
              text-xl
              font-bold
              text-white
            "
          >
            ส่ง
          </button>

        </div>
      </div>
    </div>
  );
}