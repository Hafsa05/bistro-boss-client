import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";


const FoodCard = ({ item }) => {
	const { name, recipe, image, price, _id } = item;
	const { user } = useContext(AuthContext);
	const[, refetch] =useCart();
	const navigate = useNavigate();
	const location = useLocation();

	const handleAddToCart = (item) => {
		console.log(item);
		if (user && user.email) {
			const cartItem = { menuItemId: _id, name, image, price, email: user.email };
			fetch('http://localhost:5000/carts', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(cartItem),
			})
				.then(res => res.json())
				.then(data => {
					// console.log('before if', data);
					if (data.insertedId) {
						// console.log('after if', data);
						refetch(); // refetch cart to update the no of items in the cart
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Food added to your cart',
							showConfirmButton: false,
							timer: 1500
						})
					}
				})
		}
		else {
			Swal.fire({
				title: 'Please login to order the food',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Login now!'
			}).then((result) => {
				if (result.isConfirmed) {
					navigate('/login', { state: { from: location } })
				}
			})
		}
	}
	return (
		<div className="card w-96 bg-base-100 shadow-xl mb-10 mx-auto">
			<figure><img src={image} alt="Shoes" /></figure>
			<p className="bg-black text-white absolute right-0 mr-4 mt-4 px-4 py-1">${price}</p>
			<div className="card-body flex flex-col items-center ">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions justify-end">
					<button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 text-orange-700   border-0 border-b-4">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;