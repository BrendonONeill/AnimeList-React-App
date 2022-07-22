import Card from "./Card"


function CardList({items, cardSelect, activeNav}) {
    return (<>
    <div className={activeNav?'mainContainer stopScroll':'mainContainer'}> 
    {items.map(item => (
      <Card key={item.mal_id}  item={item} cardSelect={cardSelect} />
    ))}
  </div>
  </>)
}
  
  export default CardList