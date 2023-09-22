'use client'
import { useState } from "react"

const SearchBar = () => {
    const [firstSearch, setFirstSearch] = useState('')
  return (
    <div>
        <form>
            <input type="text" placeholder='Volkswagen' onChange={(e) => setFirstSearch(e.target.value)} />
        </form>
        <div></div>
    </div>
  )
}

export default SearchBar