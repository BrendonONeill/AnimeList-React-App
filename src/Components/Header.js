import SearchBar from "./SearchBar"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { GlobalContext } from "../App"

function Header() {

  const { searchBar, openNav, displaySearchBar, navReset, paginationReset} = useContext(GlobalContext)

  return (

    <header className='header'>
      <a >
        <span className="burger"></span>
        <span onClick={openNav} className="burger"></span>
        <span className="burger"></span>
      </a>
      
      <Link onClick={function(event){navReset(); paginationReset()}} to={'/'}>
      <h1 className="app-name">Animi-Data</h1>
      </Link>
      <a className="buttonHeader" onClick={displaySearchBar}><FontAwesomeIcon icon={faSearch} /> </a>
     
      
      
    </header>
  )
}

export default Header