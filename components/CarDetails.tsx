import { carProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: carProps;
}

const CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails