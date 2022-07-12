import Card from "./Card"


function CardList({items, cardSelect}) {
    return (<>
    <div className='mainContainer'> 
    {items.map(item => (
      <Card item={item} cardSelect={cardSelect} />
    ))}
  </div>
  </>)
}
  
  export default CardList