import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
	return (
		<div className="bg-fixed featured-item text-white pt-10 my-20  ">
			<div className="bg-black bg-opacity-30">
				<SectionTitle
					subHeading='Check it out' heading='from our menu'>
				</SectionTitle>
				<div className="md:flex justify-center items-center py-4 px-16 ">
					<div>
						<img src={featuredImage} alt="" />
					</div>
					<div className="md:ml-16">
						<p>March 20, 2023</p>
						<p className="uppercase">where can i get some?</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, officia odio! Blanditiis dolorem ullam quis animi perferendis optio, minus, quidem quo maxime porro voluptatum, at eos. Aspernatur optio consequuntur voluptatibus quos eveniet possimus officiis aperiam nesciunt ullam ut eaque quidem aliquid sapiente quaerat eos in molestiae nihil, culpa perferendis. Numquam.</p>
						<button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Featured;