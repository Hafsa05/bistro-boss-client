import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
	const location = useLocation();
	// console.log(location);
	const myLocation = location.pathname;
	// console.log(myLocation);
	const noHeaderFooter = myLocation.includes('login')||myLocation.includes('signup');
	return (
		<div>
			{ noHeaderFooter || <Navbar></Navbar> }
			<Outlet></Outlet>
			{ noHeaderFooter || <Footer></Footer> }
		</div>
	);
};

export default Main;