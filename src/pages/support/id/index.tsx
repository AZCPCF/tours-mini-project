import { AttachmentIcon, SendIcon } from "@/assets/icons";
import { Input } from "@/components/common/input";
import { SupportChat } from "@/components/pages/supportById/chat";
import { SupportByIdHeader } from "@/components/pages/supportById/header";
import { supports } from "@/data/support";
import { useParams } from "react-router";
export default function SupportByIdPage() {
  const { id } = useParams<{ id: string }>();
  const support = supports.find((s) => s.id === id);

  if (!support) {
    return <div className="text-black text-right p-4">.تیکت مورد نظر پیدا نشد</div>;
  }

  return (
    <div>
      <SupportByIdHeader support={support} />
      <SupportChat messages={support.chat} />
      <div className="fixed bottom-0 flex w-full bg-white gap-3 py-4 px-3 justify-between items-center">
        <button className="border border-gray-300 bg-[#F4F7F9] w-14 h-14 rounded-[18px] flex justify-center items-center">
          <SendIcon />
        </button>
        <Input
          className="bg-transparent mt-0 border-gray-300 pr-4 outline-gray-300 w-8/12 h-14"
          placeholder="نوشتن پیام..."
        />
        <button className="border border-gray-300 bg-[#F4F7F9] w-14 h-14 rounded-[18px] flex justify-center items-center">
          <AttachmentIcon />
        </button>
      </div>
    </div>
  );
}
