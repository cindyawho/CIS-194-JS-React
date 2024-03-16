import React from "react"

export default function Card(props) {
  console.log("This is the props in the card: ", props)
  const{id, title, description, price, coverImg, stats, location} = props.item;
  console.log("ID Saved: ", id);
  console.log("Title saved: ", title);
  console.log("Description saved: ", description);
  console.log("Price saved: ", price);
  console.log("CoverImg saved: ", coverImg);
  console.log("Stats saved: ", stats);
  console.log("Location saved: ", location);
  
  return(
    <div>
      <p>
        {
            // data.map(item => 
                <>
                    {/* {console.log(item)}; */}
                    {/* <div><img src={coverImg}/></div> ?use sentence function to combine "./" with coverImg? */}
                    <div>{title}</div>
                    <div><b>Average Cost ${price}</b> / LB</div>
                    <div>Kingdom: {stats.kingdom}</div>
                    <div>Family: {stats.family}</div>
                    <div>Genus: {stats.genus}</div>
                    <div>Origin: {location}</div>
                </>
            // )
        }
      </p>
    </div>
  );

}