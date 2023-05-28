
const FoodCard = ({ item }) => {
	const { name, recipe, image, price, } = item;
	return (
		<div className="card w-96 bg-base-100 shadow-xl mb-10 mx-auto">
			<figure><img src={image} alt="Shoes" /></figure>
			<p className="bg-black text-white absolute right-0 mr-4 mt-4 px-4 py-1">${price}</p>
			<div className="card-body flex flex-col items-center ">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-outline bg-slate-100 text-orange-700   border-0 border-b-4">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;