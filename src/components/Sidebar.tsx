import Image from "next/image";
import Avatar from "../../public/image/avatar.jpeg";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full w-1/4 bg-[#b0eaff] items-center pt-5">
      <Image
        src={Avatar}
        alt="Avatar"
        className="w-[250px] h-[250px] rounded-full shadow-2xl"
      />
      <p className="mt-10 text-[50px] font-bold">Jay Lim</p>
      <p className="text-center">
        Hello! Welcome to my blog.
        <br />
        Hope you guys have a nice day :)
      </p>
    </div>
  );
}
