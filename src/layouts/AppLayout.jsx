import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";


const AppLayout = ( {products, cart, setToken} ) => {
    return ( <>
        <AppHeader />
        <AppNavbar products={products} cart={cart} setToken={setToken}/>
        <Outlet />
        <AppFooter />
    </> );
}
 
export default AppLayout;