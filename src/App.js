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
      id: 1,
      to: '/Action'
    },
    {
      name: "Adventure",
      id: 2,
      to: '/Adventure'

    },
    {
      name:  "Comedy",
      id: 3,
      to: '/Comedy'
    },
    {
      name: "Drama",
      id: 4,
      to: '/Drama'
    },
    {
      name: "Fantasy",
      id: 5,
      to: '/Fantasy'
    },
    {
      name:  "Horror",
      id: 6,
      to: '/Horror'
    },
    {
      name:  "Mystery",
      id: 7,
      to: '/Mystery'
    },
    {
      name: "Romance",
      id: 8,
      to: '/Romance'
    },
    {
      name: "Sci-Fi",
      id: 9,
      to: '/Sci-Fi'
    },
    {
      name:  "Slice of Life",
      id: 10,
      to: '/Slice of Life'
    },
    {
      name:  "Supernatural",
      id: 11,
      to: '/Supernatural'
    },
    {
      name:  "Suspense",
      id: 12,
      to: '/Suspense'
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
