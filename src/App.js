import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Pages from './pages/Pages';


function App() {

  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState(1)
  
  const genres = [
    {
      name: "Action",
      id: 1
    },
    {
      name: "Adventure",
      id: 2
    },
    {
      name:  "Comedy",
      id: 3
    },
    {
      name: "Drama",
      id: 4
    },
    {
      name: "Fantasy",
      id: 5
    },
    {
      name:  "Horror",
      id: 6
    },
    {
      name:  "Mystery",
      id: 7
    },
    {
      name: "Romance",
      id: 8
    },
    {
      name: "Sci-Fi",
      id: 9
    },
    {
      name:  "Slice of Life",
      id: 10
    },
    {
      name:   "Supernatural",
      id: 11
    },
    {
      name:  "Suspense",
      id: 12
    }
    ]

  const info = async () =>
  {
    const infofetch = await fetch(`https://api.jikan.moe/v4/top/anime?page=${pagination}`)
    .then(res => res.json())
    setItems(infofetch.data)
  }

  const IncreasePage = (prevstate) =>
  {
    setPagination(prevstate + 1)
  }

  const DecreasePage = (prevstate) =>
  {
    setPagination(prevstate - 1)
  }
  
  useEffect(() => {
    info()
  },[pagination])


  
  console.log(items)
  return (
    <>
    <Router>
    <Pages pagination={pagination} genres={genres}  items={items} IncreasePage={IncreasePage} DecreasePage={DecreasePage} />
    </Router>
    </>
  );
}

export default App;
