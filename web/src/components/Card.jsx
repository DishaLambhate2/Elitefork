import Button from "./Button"
import "../css/card.css"


 const Card = ({image,name,cuisine,rating}) =>{
  return(
    <div className="card">
        <div className="image">
            <img src={image} alt=""/>
        </div>
        <div className="title">
             <h3>{name}</h3>
             <p>Cuisine: {cuisine}</p>
             <p>Rating: {rating}</p>
             <Button btnName={"Order Now"}/>
        </div>
    </div>
  )
}


export default Card;