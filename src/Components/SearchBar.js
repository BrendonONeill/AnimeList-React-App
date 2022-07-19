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
    <button className='input-buttonStyles' type="submit">Look</button> 
    </form>
    </>
  )
}

export default SearchBar