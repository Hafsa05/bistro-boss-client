import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter(item => item.category === 'popular');

	return (
		<section className="mb-12">
			<SectionTitle
				subHeading={"Check it out"}
				heading={"from out menu"} >
			</SectionTitle>
			<div className="grid md:grid-cols-2 gap-6">
				{
					popular.map(item => <MenuItems
						key={item._id}
						item={item}
					></MenuItems>)
				}
			</div>
			<div className="text-center mt-10">
				<button className="btn btn-outline border-0 border-b-4">VIEW FULL MENU</button>
			</div>

		</section>
	);
};

export default PopularMenu;