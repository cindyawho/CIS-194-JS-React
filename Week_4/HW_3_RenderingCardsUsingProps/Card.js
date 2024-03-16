import React from "react"

export default function Card(props) {
  const{id, title, description, price, coverImg, stats, location} = props.item;
  
  //console.log("CoverImg saved: ", coverImg);
  const fileName = "images/" + coverImg;
  const altDesc = "Cover Image of " + title;
  
  return(
    <div>
      <p>
        {
          <>
            {/* {console.log(item)}; */}
            <div><img src={fileName} alt={altDesc}/></div> {/*?use sentence function to combine "./" with coverImg? */}
            <div>{title}</div>
            <div><b>Average Cost ${price}</b> / LB</div>
            <div>Kingdom: {stats.kingdom}</div>
            <div>Family: {stats.family}</div>
            <div>Genus: {stats.genus}</div>
            <div>Origin: {location}</div>
          </>
        }
      </p>
    </div>
  );

}