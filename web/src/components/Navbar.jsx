import '../css/navbar.css'
import Button from './Button'

function Navbar() {
    return(
        <header>
            <div className="navbar">
                <div className="logo">
                    <h2>Elite fork</h2>
                </div>
                <nav>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact us</a>
                </nav>
                <div>
                <a href="/about"><Button btnName={"Login"}/></a>
                <a href="/signup"><Button btnName={"Sign up"}/></a>
                </div>
            </div>
        </header>
    )
}
export default Navbar