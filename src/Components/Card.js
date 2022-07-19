function Card({item, cardSelect}) {
  return (
    <div className='card' onClick={() => cardSelect(item.mal_id)}>
        <div className='image-section'>
        <img src={item.images.webp.large_image_url} alt={item.title} width="300" height="395"/>
        </div>
        <div className='name-section'>
        <h3>{item.title}</h3>
        </div>
        <p className='score'>{item.score}</p>
        <p className='place'>{item.rank}</p>
      </div>
  )
}

export default Card