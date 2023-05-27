
const MenuItems = ({item}) => {
	const{name, recipe, image, price,} = item;
	return (
		<div className="flex gap-7">
			<img style={{borderRadius:'0 200px 200px 200px'}} className="w-[118px]" src={image} alt="" />
			<div>
				<h3 className="uppercase text-xl">{name}--------</h3>
				<p className="text-xs">{recipe}</p>
			</div>
			<p className="text-yellow-600">${price}</p>
			
		</div>
	);
};

export default MenuItems;