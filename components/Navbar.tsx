import { CustomButton } from ".";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row items-start justify-between pt-10 px-24">
      <div className="flex flex-row w-30 items-center justify-between">
        <p>Cars</p>
        <Image src={"/logo.png"} width={80} height={80} alt="logo" />
      </div>
      <CustomButton title="Sign in" containerStyles="bg-primary-blue text-white rounded-full" />
    </div>
  );
};

export default Navbar;
