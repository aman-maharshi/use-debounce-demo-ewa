import { useEffect, useState } from 'react';
import { Cross, Search } from "./icons"
import { useLocation } from 'react-router-dom';
import { useDebouncedCallback } from "use-debounce"

const Home = () => {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const query = params.get('search') || ''

  const [search, setSearch] = useState(query)
  const [debouncedSearch, setDebouncedSearch] = useState(query)

  const debounce = useDebouncedCallback(value => setDebouncedSearch(value), 500)

  const handleSearch = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debounce(newSearch)


  }

  useEffect(() => {
    // Update the URL query string
    if (search) {
      params.set('search', search)
    } else {
      params.delete('search')
    }
    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`)
  }, [search])


  const handleClearSearch = () => {
    setSearch('')
    params.delete('search')
    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`)
  }

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
            onClick={handleClearSearch}
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