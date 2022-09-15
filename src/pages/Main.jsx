import CardList from '../Components/CardList'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import SubHeader from '../Components/SubHeader'
import { useContext } from "react";
import { GlobalContext } from "../App"



function Main({cardSelect}) {
    

  const {pagination, items, IncreasePage, DecreasePage, searchBar} = useContext(GlobalContext)
    
  return (
    <>
    <Header />
    { searchBar ? <SubHeader /> : null}
    <main className='container'>
    <Navbar />
    <CardList items={items}  cardSelect={cardSelect} />
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