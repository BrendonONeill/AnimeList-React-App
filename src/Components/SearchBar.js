import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const nav = useNavigate();
    const searchSumbit = (e) => {
        console.log('hello')
        e.preventDefault();
        nav('/search/'+ searchInput)
    };

  return (
    <>
    <form onSubmit={searchSumbit}>
    <input className="inputStyles"  input='text' value={searchInput} placeholder="Cat" onChange={(e) => setSearchInput(e.target.value)} />  
    </form>
    </>
  )
}

export default SearchBar