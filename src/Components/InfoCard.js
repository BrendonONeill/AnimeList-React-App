
function InfoCard({item, id}) {
  return (
    <div className='card-information'>

      <div className='main-information'>
      {(item.length !== 0) &&<img src= {item.images.jpg.large_image_url} alt={item.title} width="400" height="495"/>}
      <h1>Anime Name: {item.title}</h1>
      <h2>Japanese Name: {item.title_japanese}</h2>
      <p>{item.synopsis}</p>

      </div>
      <div className='second-information'>

      </div>

    </div>
  )
}

export default InfoCard