"use client";
import { useState } from "react";
import Image from "next/image";
import { carProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import { GiSteeringWheel } from "react-icons/gi";
import { BiSolidGasPump } from "react-icons/bi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import CarDetails from "./CarDetails";

interface carCardProps {
  car: carProps;
}

export default function Cars({ car }: carCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card min-w-[400px] group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="selft-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/toyota.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <GiSteeringWheel />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.png"} width={20} height={20} alt="icon" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BiSolidGasPump />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10;">
          <CustomButton
            title={"view more"}
            containerStyles="w-full h-full text-gega-white bg-primary-blue rounded-full"
            rightIcon={<BsFillArrowRightSquareFill />}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}
