import LogoTransparent from "@/assets/logoTransparent.png";
import Image from "next/image";
import { InputSearch } from "../molecules/inputSearch/InputSearch";

export const Header = () => {
  return (
    <header className="flex w-full bg-[#bdbfc1] font-bold">
      <Image
        src={LogoTransparent}
        alt={"logo-music-vibra"}
        width={75}
        className="m-3"
      />
      <InputSearch placeholder="Search..." />
    </header>
  );
};
