import { fetchCars } from "@/utils";

export default async function Cars() {
  const allCars = await fetchCars();
  return (
    <div>
      {allCars.map((car) => {
        <div key={car}>{car.make}</div>;
      })}
    </div>
  );
}
