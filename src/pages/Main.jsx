import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SubHeader from '../Components/SubHeader'



function Main({genres, items, cardSelect, IncreasePage, DecreasePage, pagination, searchBar, displaySearchBar, activeNav, openNav, navReset}) {
    
    
  return (
    <>
    <Header displaySearchBar={displaySearchBar} searchBar={searchBar} openNav={openNav} navReset={navReset}/>
    { searchBar ? <SubHeader /> : null}
    <main className='container'>
    <Navbar activeNav={activeNav} genres={genres} navReset={navReset}  />
    
    <CardList  items={items} cardSelect={cardSelect} activeNav={activeNav}/>
    
    </main>
    <div className='buttons-page'>
    <button onClick={() => DecreasePage(pagination)}>{pagination - 1}</button>
    <p>Page {pagination} </p>
    <button onClick={() =>IncreasePage(pagination)}>{pagination + 1}</button>
    </div>
    </>
  )
}

export default Main