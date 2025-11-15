import { SeenIcon } from "@/assets/icons";
import type { ChatMessage } from "@/data/support";
import { cn } from "@/lib/utils";

type ChatProps = {
  messages: ChatMessage[];
};

export const SupportChat = ({ messages }: ChatProps) => {
  return (
    <div className="flex flex-col gap-4 p-4 direction-rtl">
      <p className="text-base text-center text-neutral-900">امروز</p>
      {messages.map((msg, index) => (
        <div
          key={msg.id}
          className={cn(
            "flex flex-col max-w-[70%]",
            msg.sender === "user"
              ? "self-start items-start"
              : "self-end items-end",
            index != 0 && "mt-4"
          )}
        >
          <div
            className={cn(
              "rounded-[18px] text-lg px-3 py-2 relative",
              msg.sender === "user"
                ? "bg-white text-neutral-700 rounded-tr-sm"
                : "bg-primary text-white rounded-bl-sm"
            )}
          >
            <p>{msg.message}</p>
            <div
              className={cn(
                "flex items-center gap-1 text-xs mt-1 opacity-70 absolute -bottom-6",
                msg.sender == "admin" ? "right-2" : "left-2"
              )}
            >
              <span className="text-gray-400">{msg.time}</span>
              {msg.sender === "admin" && (msg.seen ? <SeenIcon /> : "")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
