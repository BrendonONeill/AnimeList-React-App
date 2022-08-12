
function InfoCard({item, id}) {
  return (
    <div className='card-information'>
      
      <div className='main-information'>
      {(item.length !== 0) &&<img className="info-img" src= {item.images.jpg.large_image_url} alt={item.title} width="400" height="495"/>}
      <h1 className="card-info-headings">{item.title}</h1>
      <h2 className="card-info-headings">{item.title_japanese}</h2>

      <div className="card-info-grid">
      <p className="card-info-score card-info-text-style-one">Score:</p>
      <p className="card-info-score-num card-info-text-style-two">{item.score}</p>
      <p className="card-info-rank card-info-text-style-one">Ranked</p>
      <p className="card-info-rank-num card-info-text-style-two">{item.rank}</p>
      <p className="card-info-pop card-info-text-style-one">Popularity:</p>
      <p className="card-info-pop-num card-info-text-style-two">{item.popularity}</p>
      </div>

      <div className="card-info-grid">
      <p className="card-info-score card-info-text-style-one">Type</p>
      <p className="card-info-score-num card-info-text-style-two">{item.type}</p>
      <p className="card-info-rank card-info-text-style-one">Episodes</p>
      <p className="card-info-rank-num card-info-text-style-two">{item.episodes}</p>
      <p className="card-info-pop card-info-text-style-one">Year</p>
      <p className="card-info-pop-num card-info-text-style-two">{item.year}</p>
      </div>

      <div className="card-info-grid-two">
          <p> <span className="card-info-text-style-one">Rating:</span>  {item.rating}</p>
          <p className="card-info-studio card-info-text-style-one">Studios </p>
          <div className="card-info-studio-names">
          {(item.length !== 0) &&item.studios.map(studio => (
          <p className="card-info-text-style-three">{studio.name}</p>
          ))}
          </div>

          <p className="card-info-genres card-info-text-style-one">Genres </p>
          <div className="card-info-genres-names">
          {(item.length !== 0) &&item.genres.map(genre => 
          <p className="card-info-text-style-three">{genre.name}</p>
          )}
          </div>
      </div>

     
      <h3>Synopsis</h3>
      <p className="card-info-syn">{item.synopsis}</p>
      <div className="button-box">
        <a className="card-info-button" href={item.url} target="_blank">
          More Information
        </a>
      </div>
      
      </div>
      <div className='second-information'>

      </div>

    </div>
  )
}

export default InfoCard