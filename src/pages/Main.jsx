import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



function Main({genres, items, cardSelect, IncreasePage, DecreasePage, pagination}) {
    
    
  return (
    <>
    <Header />
    <main className='container'>
    <Navbar genres={genres} />
    <CardList  items={items} cardSelect={cardSelect}/>
    
    </main>
    <div className='buttons-page'>
    <button onClick={() => DecreasePage(pagination)}>{pagination - 1}</button>
    <p>Page {pagination} </p>
    <button onClick={() =>IncreasePage(pagination)}>{pagination + 1}</button>
    </div>
    
    <Footer />
    </>
  )
}

export default Main