import { useContext } from "react";
import { GlobalContext } from "../App";

function Card({ item, cardSelect }) {
  return (
    <div className="card" onClick={() => cardSelect(item.mal_id)}>
      <div className="image-section">
        <img src={item.images.webp.large_image_url} alt={item.title} />
      </div>
      <div className="name-section">
        <p>{item.title}</p>
      </div>
      <p className="score">{item.score}</p>
      <p className="place">{item.rank}</p>
    </div>
  );
}

export default Card;
