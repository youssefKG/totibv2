import { ClipboardIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface CopyPropsI {
  text: string;
  title: string;
  titleColor?: string;
}
const Copy = ({ title, text, titleColor }: CopyPropsI) => {
  const [isCopyed, setIsCopyed] = useState<boolean>(false);
  const onCopy = async () => {
    navigator.clipboard.writeText(text);
    setIsCopyed(true);
  };

  return (
    <div className="flex flex-col  w-full  max-w-2xl">
      <p style={{ color: titleColor ?? "black" }}>{title} </p>
      <div className="flex justify-between p-1 bg-[#161617] rounded-md ">
        <p className="text-gray-400 tracking-wider text-md">{text}</p>
        <button
          onClick={onCopy}
          className="cursor-pointer hover:opacity-85 transition-all"
        >
          {isCopyed ? (
            <ClipboardDocumentCheckIcon className="size-6 text-white" />
          ) : (
            <ClipboardIcon className="size-6 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Copy;
