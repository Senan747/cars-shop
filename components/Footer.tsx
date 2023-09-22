
import { footerLinks } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full items-start px-24 pb-10 flex flex-row flex-wrap justify-between">
      <div className="flex flex-row w-30 items-center justify-between">
        <p>Cars</p>
        <Image src={"/logo.png"} width={80} height={80} alt="logo" />
      </div>
      <div className="flex flex-row flex-wrap justify-between w-[900px]">
        {footerLinks.map((link) => (
          <div>
            <p className="font-bold"> {link.title}</p>
            <div>
              {link.links.map((item) => (
                <p className="cursor-pointer">{item.title}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
