
function Navbar({genres}) {
  return (
    <nav className='filter-bar'>
      
      {genres.map((genre) => (
      <div className='filter-content'>
      <h2 key={genre.id}>{genre.name}</h2>
      </div>
      ))}
      
    </nav>
  )
}

export default Navbar