import { Link, type To } from "react-router";

type HeaderLinkProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: boolean;
  to: To;
};

export const HeaderLink = ({
  badge = false,
  icon: Icon,
  to,
}: HeaderLinkProps) => {
  return (
    <Link
      to={to}
      className="bg-[#F4F7F9] border border-[#EEEEF0] px-4 py-2 rounded-[18px] w-14 h-14 flex items-center justify-center relative"
    >
      <Icon className="w-6 h-6" />
      {badge ? (
        <div className="bg-[#F25267] w-2 h-2 rounded-full absolute top-2 right-2"></div>
      ) : undefined}
    </Link>
  );
};
