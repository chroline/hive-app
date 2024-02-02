import { Avatar } from "~/components/ui/avatar.tsx";

import HiveLogo from "../assets/hive-logo.svg?react";

export function Header() {
  return (
    <header className={"fixed top-0 z-10 flex h-16 w-full border-b border-[#eee] bg-white/50 backdrop-blur-md"}>
      <div className={"mx-auto flex w-full max-w-6xl items-center justify-between px-4"}>
        <HiveLogo className={"h-6"} />
        <Avatar src={"/img/avatar.png"} />
      </div>
    </header>
  );
}
