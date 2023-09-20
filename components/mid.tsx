"use client"

import { CustomButton } from ".";


const main = () => {
  const handleScroll = () => {};
  return (
    <div className="flex flex-col xl:flex-row gap-5 relative z-0 mx-auto">
      <div>
        <h1 className="text-5xl font-extrabold">
          Search, book, or rent a car - quickly and easily!
        </h1>
        <p className="mt-5">
          We are the leading online marketplace for used cars. We offer over 20
          million vehicles to buyers all around the world!
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default main;
