import { CustomFilter } from ".";
import { SearchBar } from ".";
import { Cars } from ".";
import { fetchCars } from "@/utils";

export default async function CarCatalogue() {
  const allCars = await fetchCars();

  return (
    <div className="flex w-full items-center justify-centerds px-24 pb-20">
      <div>
        <h1 className="text-4xl font-bold mb-5">CarCatalogue</h1>
        <div className="flex flex-row gap-20">
          <SearchBar />
          <CustomFilter />
        </div>
        <div className="w-full flex items-center justify-between flex-wrap flex-row gap-5">
          {allCars?.map((car) => (
            <Cars car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
