import { CustomFilter } from ".";
import { SearchBar } from ".";
import { Cars} from "."

export default async function CarCatalogue() {
  


  return (
    <div className="flex w-full px-24 pb-20">
      <div>
        <h1 className="text-4xl font-bold mb-5">CarCatalogue</h1>
        <div className="flex flex-row gap-20">
          <SearchBar />
          <CustomFilter />
        </div>
        <Cars />
      </div>
    </div>
  );
}
