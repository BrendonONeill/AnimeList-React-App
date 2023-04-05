import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Pages from "./pages/Pages";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";

export const GlobalContext = createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [activeNav, setActiveNav] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const genres = [
    { name: "Action", id: 1, to: "/Action" },
    { name: "Adventure", id: 2, to: "/Adventure" },
    {
      name: "Comedy",
      id: 4,
      to: "/Comedy",
    },
    {
      name: "Drama",
      id: 8,
      to: "/Drama",
    },
    {
      name: "Fantasy",
      id: 10,
      to: "/Fantasy",
    },
    {
      name: "Horror",
      id: 14,
      to: "/Horror",
    },
    {
      name: "Romance",
      id: 22,
      to: "/Romance",
    },
    {
      name: "Slice of Life",
      id: 36,
      to: "/Slice of Life",
    },
  ];

  const IncreasePage = (prevstate) => {
    setPagination(prevstate + 1);
  };

  const DecreasePage = (prevstate) => {
    setPagination(prevstate - 1);
  };

  useEffect(() => {
    const info = async () => {
      const infofetch = await fetch(
        `https://api.jikan.moe/v4/top/anime?page=${pagination}`
      ).then((res) => res.json());

      setItems(infofetch.data);
    };
    info();
    window.scrollTo(0, 0);
  }, [pagination]);

  const openNav = () => {
    if (searchBar === true) {
      setSearchBar(!searchBar);
    }
    setActiveNav(!activeNav);
  };

  const displaySearchBar = () => {
    if (activeNav === true) {
      setActiveNav(!activeNav);
    }
    setSearchBar(!searchBar);
  };

  const navReset = () => {
    setActiveNav(false);
    setSearchBar(false);
  };

  const paginationReset = () => {
    setPagination(1);
  };

  return (
    <>
      <Router>
        <GlobalContext.Provider
          value={{
            pagination,
            genres,
            items,
            IncreasePage,
            DecreasePage,
            activeNav,
            searchBar,
            openNav,
            displaySearchBar,
            navReset,
            paginationReset,
          }}
        >
          <ErrorBoundary fallback={<ErrorPage />}>
            <Pages />
          </ErrorBoundary>
        </GlobalContext.Provider>
      </Router>
    </>
  );
}

export default App;
