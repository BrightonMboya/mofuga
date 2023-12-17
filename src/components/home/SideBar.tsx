import Avatar from "~/components/home/Avatar";
import Link from "next/link";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 pt-5 ">
        <Link href="/" className="pl-1">
          <Avatar imageUrl="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" />
        </Link>
        <ChatBubbleIcon className="text-blue h-[30px] w-[30px] cursor-pointer" />
      </div>
    </>
  );
}
