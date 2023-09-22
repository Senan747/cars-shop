"use client";
import { useState } from "react";
import { manufacturers } from "@/constants";

const SearchBar = () => {
  const [firstSearch, setFirstSearch] = useState("");

  const filteredCars =
    firstSearch === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(firstSearch.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex flex-row gap-10">
      <form>
        <input
          type="text"
          placeholder="Volkswagen"
          onChange={(e) => setFirstSearch(e.target.value)}
        />
        <div className="max-h-[200px] overflow-auto bg-gega-light-grey flex flex-col cursor-pointer">
          {firstSearch != "" &&
            filteredCars.map((car) => (
              <div className=" border-gega-black border-b-[1px] p-3 hover:bg-gega-green" onClick={() => setFirstSearch(car)}>{car}</div>
            ))}
          {firstSearch != "" && filteredCars.length === 0 ? (
            <p>There is no {firstSearch} </p>
          ) : (
            " "
          )}
        </div>
      </form>

      <form>
        <input
          type="text"
          placeholder="Volkswagen"
          onChange={(e) => setFirstSearch(e.target.value)}
        />
        <div className="max-h-[200px] overflow-auto">
          {firstSearch != "" && filteredCars.map((car) => <div>{car}</div>)}
          {firstSearch != "" && filteredCars.length === 0 ? (
            <p>There is no {firstSearch} </p>
          ) : (
            " "
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
