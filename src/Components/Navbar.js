import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../App";

function Navbar() {
  const { activeNav, genres, navReset, paginationReset } =
    useContext(GlobalContext);

  return (
    <nav className={activeNav ? "filter-bar navActive" : "filter-bar"}>
      <NavLink
        onClick={function (event) {
          navReset();
          paginationReset();
        }}
        className="filter-content"
        to={`/`}
      >
        <div>
          <h2>Top Anime</h2>
        </div>
      </NavLink>
      {genres.map((genre) => (
        <NavLink
          onClick={function (event) {
            navReset();
            paginationReset();
          }}
          className="filter-content"
          key={genre.id}
          to={`/genres/${genre.id.toString()}`}
        >
          <div>
            <h2>{genre.name}</h2>
          </div>
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
