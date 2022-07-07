import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CardList from './Components/CardList';
import Footer from './Components/Footer';
import Header from './Components/Header';
import InfoCard from './Components/InfoCard';
import Navbar from './Components/Navbar';

function App() {

  const [idCode, setIdCode] = useState(0)
  const [items, setItems] = useState([]);
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
    const infofetch = await fetch('https://api.jikan.moe/v4/top/anime')
    .then(res => res.json())
    setItems(infofetch.data)
  }

  const cardSelect = (mal_id) =>
  {
    console.log(mal_id)
    setIdCode(mal_id)
  }
  
  useEffect(() => {
    info()
  },[])
  
  console.log(items)
  return (
    <>
    <Header />
    <main className='container'>
    <Navbar genres={genres} />
    <CardList  items={items} cardSelect={cardSelect}/>
    </main>
    <InfoCard items={items} id={idCode}/>
    <Footer />
    </>
  );
}

export default App;
