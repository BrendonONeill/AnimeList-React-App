import { NavLink } from "react-router-dom"

function Navbar({genres, activeNav, navReset}) {

  
  return (
    <nav className={activeNav ?'filter-bar navActive': 'filter-bar'}>
      
      {genres.map((genre) => (
      <NavLink onClick={navReset} className='filter-content' key={genre.id} to={`/genres/${genre.id.toString()}`}>
      <div >
      <h2>{genre.name}</h2>
      </div>
      </NavLink>
      ))}
      
    </nav>
  )
}

export default Navbar