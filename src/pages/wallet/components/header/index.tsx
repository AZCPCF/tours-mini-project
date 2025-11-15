import { PlusIcon } from "@/assets/icons";
import { BackLink } from "@/components/back-link";
import { Price } from "@/components/price";

const WalletHeader = () => {
  return (
    <header className="bg-white w-full p-4 pb-8">
      <div className="w-full flex justify-end py-4">
        <BackLink title="کیف‌پول" />
      </div>
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="w-full justify-center items-center flex flex-col">
          <h3 className="text-neutral-900 text-3xl w-full  text-center h-max">
            <Price number={150000000} />
          </h3>
          <p className="text-gray-400">موجودی (تومان)</p>
        </div>
        <button className="bg-primary rounded-[18px] py-[14px] px-8 flex text-lg gap-1 items-center">
          افزودن موجودی <PlusIcon />
        </button>
      </div>
    </header>
  );
};
export default WalletHeader;
