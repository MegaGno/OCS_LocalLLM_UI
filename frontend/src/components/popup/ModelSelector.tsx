const models = [
  {
    name: "qwen2.5",
    desc: "ทำงานได้หลากหลาย",
  },
  {
    name: "qwen3.6",
    desc: "ฉลาดมากขึ้น",
  },
  {
    name: "phi4",
    desc: "ตอบเร็ว",
  },
  {
    name: "deepseek",
    desc: "เขียนโค้ดเก่ง",
  },
];

type Props = {
  onSelect: (model: string) => void;
};

export default function ModelSelector({
  onSelect,
}: Props) {
  return (
    <div className="
      absolute
      bottom-32
      left-32
      bg-white
      rounded-3xl
      shadow-xl
      p-6
      w-[400px]
      z-50
    ">

      <h2 className="
        text-3xl
        font-bold
        mb-6
      ">
        {">>> เลือกโมเดล <<<"}
      </h2>

      <div className="space-y-5">

        {models.map((model) => (
          <button
            key={model.name}
            onClick={() =>
              onSelect(model.name)
            }
            className="
              flex
              flex-col
              items-start
              hover:bg-gray-100
              p-3
              rounded-xl
              w-full
            "
          >
            <span className="text-3xl font-bold">
              {model.name}
            </span>

            <span className="text-gray-500">
              {model.desc}
            </span>
          </button>
        ))}

      </div>
    </div>
  );
}