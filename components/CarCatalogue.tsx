import { CustomFilter } from "."
import { SearchBar } from "."

const CarCatalogue = () => {
  return (
    <div>
        <div>
          <h1>CarCatalogue</h1> 
          <div>
            <SearchBar />
          </div>
          <div>
            <CustomFilter />
          </div>
        </div>
        
    </div>
  )
}

export default CarCatalogue