
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carts from "../pages/Carts";

const AppNavbar = ( {products, cart, setToken} ) => {
    return ( 
       <div className="text-center"style={{marginTop: "5px",height: "60px",backgroundImage: "url('./image/panguin.gif')", backgroundSize: "cover",backgroundPosition: "center",}}>&nbsp;
            <Link to={'home'}><Button variant="success" size="lg"><h5 className="text-white">Home</h5></Button></Link>&nbsp;
            <Link to={'todos'}><Button variant="warning" size="lg"><h5 className="text-white">Todos</h5></Button></Link>&nbsp;
            <Link to={'products'}><Button variant="light" size="lg"><h5 className="text-dark">Products ({products.length})</h5></Button></Link>&nbsp;
            <Link to={'carts'}><Button className="position-relative" variant="info" size="lg"><h5 className="text-white">Cart
            { cart.length > 0 &&(
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cart.length < 10 ? cart.length : '9+'}<span class="visually-hidden">unread messages</span></span>
            )}
            </h5></Button></Link>&nbsp;
            <Link to={'calculator'}><Button variant="secondary" size="lg"><h5 className="text-white">Calculator</h5></Button></Link>&nbsp;
            <Link to={'animation'}><Button variant="danger" size="lg"><h5 className="text-white">Animation</h5></Button></Link>&nbsp;
            <Link to={'compornents'}><Button variant="dark" size="lg"><h5 className="text-white">Compornents</h5></Button></Link>
            <Link to={'logout'}><Button variant="outline-danger" size="lg" style={{marginLeft:' 2rem'}}><h5 className="text-white" onClick={() => {
                setToken('')
            }}>Logout</h5></Button></Link>
        </div>
     );
}
 
export default AppNavbar;