import Button from "./Button"
import '../css/hero.css'

const Hero = ()=>{
    return(
        <div className="hero">
            <div className="info">
            <h1>Order Food & Groceries. <br /> Discover the best restaurants. <br /> Elite Fork it!</h1>
            <Button btnName={"Explore More"}/>
            </div>
            
        </div>
    )
}

export default Hero