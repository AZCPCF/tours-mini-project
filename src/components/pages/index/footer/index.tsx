import { PlusIcon } from "@/assets/icons";

const IndexFooter = () => {
  return (
    <footer className="w-full absolute bottom-0">
      <button className="bg-primary w-full h-16 rounded-t-[18px] flex justify-center items-center">
        <div className="flex items-center gap-1">
          <p className=" text-lg">افزودن تور</p>
          <PlusIcon width={24} height={24}/>
        </div>
      </button>
    </footer>
  );
};
export default IndexFooter;
