import { useState, useEffect } from 'react';
import { Cross, Search } from "./icons"

const Home = () => {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }

  useEffect(() => {
    if (search) {
      console.log(search)
    }
  }, [search])


  return (
    <div className='h-screen flex justify-center items-center bg-[#393939] text-white'>

      <div className='bg-[#121212] p-6 rounded-lg shadow-md shadow-gray-800 flex items-center gap-4 w-[500px]'>
        <Search />
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          className='flex-1 bg-transparent outline-none border-none text-lg'
        />

        {search && (
          <button
            onClick={() => setSearch('')}
            className='cursor-pointer'
          >
            <Cross />
          </button>
        )}
      </div>
    </div>
  )
}

export default Home