import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const nav = useNavigate();
    const searchSumbit = (e) => {
        e.preventDefault();
        nav('/search/'+ searchInput)  
    };
    const searchAnime = (e) => {setSearchInput(e.target.value)}

  return (
    <>
    <form onSubmit={searchSumbit}>
    <input className="inputStyles"  input='text' value={searchInput} placeholder="Pokemon" 
    onChange={searchAnime} />
    <button className='input-buttonStyles' on disabled={searchInput === ""} type="submit"><FontAwesomeIcon icon={faSearch} /></button> 
    </form>
    </>
  )
}

export default SearchBar