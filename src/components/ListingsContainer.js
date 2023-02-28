import React from "react";
//import { render } from "react-dom";
import ListingCard from "./ListingCard";

function ListingsContainer({Items, callback}) {
let renderCard = Items.map((data) => {
  return(<ListingCard onDelete={callback} id={data.id} key={data.id} image={data.image} description={data.description} location={data.location}/>)
})

  return (
    <main>
      <ul className="cards">
        {renderCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
