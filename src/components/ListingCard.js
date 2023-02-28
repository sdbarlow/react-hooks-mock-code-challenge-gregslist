import React, {useState} from "react";

function ListingCard({image, description, location, id, onDelete}) {
const [favorite, setFavorite] = useState(false);


  return (
    <li id={id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => {setFavorite(!favorite)}} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => {setFavorite(!favorite)}} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDelete(id)}  className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
