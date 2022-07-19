import { NavLink } from "react-router-dom"

function Navbar({genres}) {
  return (
    <nav className='filter-bar'>
      
      {genres.map((genre) => (
      <NavLink className='filter-content' key={genre.id} to={`/genres/${genre.id.toString()}`}>
      <div>
      <h2>{genre.name}</h2>
      </div>
      </NavLink>
      ))}
      
    </nav>
  )
}

export default Navbar