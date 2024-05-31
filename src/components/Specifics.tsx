import Link from "next/link";
import { FC, ReactNode } from "react";

interface SpecificsProps {
  children: ReactNode;
}

const Specifics = ({ children }: SpecificsProps): ReactNode => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex w-full h-52 bg-orange-400">
        <Link className="text-xl text-blue-600" href={"/profile"}>
          Profile
        </Link>
      </div>
      {children}
      <div className="flex w-full h-52 bg-blue-400"></div>
    </div>
  );
};

export default Specifics;
