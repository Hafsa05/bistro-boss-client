import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaShoppingBag, FaBook, FaUsers } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { ImSpoonKnife } from 'react-icons/im';
import useCart from "../hooks/useCart/useCart";

const Dashboard = () => {
	const [cart] = useCart();

	// todo => load data from the server to have dynamic isAdmin based on Data
	const isAdmin = true;
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				<Outlet></Outlet>
				<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

			</div>
			<div className="drawer-side bg-[#D1A054] uppercase">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80">
					{
						isAdmin ? <>
							<li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
							<li><NavLink to="/dashboard/reservations"><ImSpoonKnife></ImSpoonKnife> Add items</NavLink></li>
							<li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
							<li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All users</NavLink></li>


						</> : <>
							<li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
							<li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
							<li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
							<li>
								<NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
									<span className="badge inl badge-secondary">+{cart?.length || 0}</span>
								</NavLink>

							</li>
						</>
					}


					<div className="divider"></div>
					<li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
					<li><NavLink to="/menu"><FiMenu></FiMenu> Menu</NavLink></li>
					<li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
					<li><NavLink to="/order/salad"><AiTwotoneMail></AiTwotoneMail> Contact</NavLink></li>

				</ul>

			</div>
		</div>
	);
};

export default Dashboard;