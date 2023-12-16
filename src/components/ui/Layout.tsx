import * as React from "react";
import SideBar from "../home/SideBar";
import ConversationFeed from "../home/ConversationFeed";
import { GeistSans } from "geist/font/sans";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <section className={GeistSans.className}>
      <div className="flex space-x-5">
        <SideBar />
        <ConversationFeed />
        <main className="">{children}</main>
      </div>
    </section>
  );
}
