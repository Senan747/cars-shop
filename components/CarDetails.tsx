import { Fragment } from "react";
import { useEffect } from "react"; // Import useEffect
import Image from "next/image";

import { carProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-x-hidden overflow-y-auto">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>

          <div className="modal-container bg-white w-full max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-close absolute top-0 right-0 m-4">
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
              </button>
            </div>

            <div className="modal-content p-4">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain" />
              </div>

              <div className="flex gap-3 mt-4">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image src={generateCarImageUrl(car, "29")} alt="car model" fill priority className="object-contain" />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image src={generateCarImageUrl(car, "33")} alt="car model" fill priority className="object-contain" />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image src={generateCarImageUrl(car, "13")} alt="car model" fill priority className="object-contain" />
                </div>
              </div>

              <div className="mt-4">
                <h2 className="font-semibold text-xl capitalize">
                  {car.make} {car.model}
                </h2>

                <div className="mt-3 flex flex-wrap gap-4">
                  {Object.entries(car).map(([key, value]) => (
                    <div className="flex justify-between gap-5 w-full text-right" key={key}>
                      <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                      <p className="text-black-100 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetails;
