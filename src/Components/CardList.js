import Card from "./Card"
import { useContext } from 'react';
import { GlobalContext } from "../App"


function CardList({items, cardSelect}) {
  const { activeNav} = useContext(GlobalContext)

  return (
  <>
    <div className={activeNav?'mainContainer stopScroll':'mainContainer'}> 
    {items.map(item => (
      <Card key={item.mal_id}  item={item} cardSelect={cardSelect} />
    ))}
  </div>
  </>
  )
}
  
  export default CardList