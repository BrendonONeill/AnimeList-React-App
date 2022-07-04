import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

 
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

  


  useEffect(() => {
    info() 
  },[])
  
  console.log('testing....'+ items)
  return (
    <>
    <nav className='navbar'><h1>Anime List</h1></nav>
    <main className='container'>
    <div className='filter-bar'>
      
      {genres.map((genre) => (
      <div className='filter-content'>
      <h2 key={genre.id}>{genre.name}</h2>
      </div>
      ))}
      
    </div>
    <div className='mainContainer'> 
      {items.map(item => (
        <div className='card'>
          <div className='image-section'>
          <img src={item.images.jpg.large_image_url} alt="Girl in a jacket" width="300" height="395"/>
          </div>
          <div className='name-section'>
          <h3>{item.title}</h3>
          </div>
          <p className='score'>{item.score}</p>
          <p className='place'>{item.rank}</p>
        </div>
      ))}
    </div>
    </main>
    <div className='card-information'>
      {(items.length > 0)?<h2>{items[3].title}</h2>: ''}
      <div className='main-information'>
        <img />
        

      </div>
      <div className='second-information'>

      </div>


    </div>
    </>
  );
}

export default App;
