import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer>
			<div className="footer p-10 bg-[#1F2937] text-neutral-content grid grid-cols-2 text-center">
				<div >
					<h2 className="uppercase text-3xl ">Contact Us</h2>
					<p className="text-xl ">123 ABS Street, Uni 21, Bangladesh</p>
					<p className="text-xl ">+88 123456789</p>
					<p className="text-xl ">Mon - Fri: 08:00 - 22:00</p>
					<p className="text-xl ">Sat - Sun: 10:00 - 23:00</p>
				</div>
				<div className="bg-[#111827] text-neutral-content ">
					<div >
						<h2 className="uppercase text-3xl mb-6 ">follow us</h2>
						<p className="text-xl mb-8  ">Join us on social media</p>
						<p className='h-[35] w-[35] gap-6  flex items-center '><FaFacebookF></FaFacebookF> <FaInstagram></FaInstagram> <FaTwitter></FaTwitter></p>

					</div>
				</div>

			</div>

			<div className="bg-black footer-center p-4 text-neutral-content">
				<div>
					<p>Copyright © 2023 - All right reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;