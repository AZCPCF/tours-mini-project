import { Input } from "@/components/common/input";

export const AddSupportForm = () => {
  return (
    <form
      className="text-neutral-900"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="mt-4">
        <label htmlFor="" className="mr-1">
          موضوع
        </label>
        <Input
          placeholder=""
          className="bg-gray-100 border-gray-200 outline-gray-200 pr-3"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="" className="mr-1">
          توضیحات
        </label>
        <textarea
          placeholder="متن توضیحات خود را وارد کنید..."
          className="rounded-[18px] border  w-full placeholder:text-gray-300 px-2 py-4 focus:outline-2 direction-rtl pr-3 mt-1 text-black bg-gray-100 border-gray-200 outline-gray-200 min-h-32 max-h-32"
          cols={10}
          name=""
          id=""
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary rounded-[18px] text-white py-[14px] px-8 mt-4"
      >
        ارسال
      </button>
    </form>
  );
};
