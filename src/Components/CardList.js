import Card from "./Card"


function CardList({items, cardSelect}) {
    return (<>
    <div className='mainContainer'> 
    {items.map(item => (
      <Card key={item.mal_id}  item={item} cardSelect={cardSelect} />
    ))}
  </div>
  </>)
}
  
  export default CardList