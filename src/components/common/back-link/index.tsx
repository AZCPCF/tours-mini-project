import { ArrowRightIcon } from "@/assets/icons";
import { Link, type To } from "react-router";

type BackLinkProps = {
  title?: string;
  to?: To;
};
export const BackLink = ({ title, to = "/" }: BackLinkProps) => {
  return (
    <div className="flex items-center gap-2">
      {title ? <p className=" text-xl text-neutral-900">{title}</p> : undefined}
      <Link to={to}>
        <ArrowRightIcon  />
      </Link>
    </div>
  );
};
