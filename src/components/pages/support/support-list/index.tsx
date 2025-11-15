import { supports } from "@/data/support";
import { SupportCard } from "./support-card";

const SupportList = () => {
  return (
    <div className="flex flex-wrap gap-3 direction-rtl mx-3 mt-8">
      {supports.map((support, index) => (
        <SupportCard support={support} key={"activity-card-" + index} />
      ))}
    </div>
  );
};
export default SupportList;
