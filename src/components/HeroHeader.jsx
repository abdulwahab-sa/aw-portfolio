import { motion } from 'framer-motion';

const HeroHeader = () => {
	return (
		<div id="home-sec" className="hero-section text-darkGrey flex items-center justify-center">
			<div className="flex flex-col space-y-8 md:space-y-10 mx-auto mt-16 px-6 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					viewport={{ once: true }}
					className="text-4xl font-bold tracking-wider md:text-6xl "
				>
					{' '}
					HEY, I`M ABDUL WAHAB{' '}
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.1 }}
					viewport={{ once: true }}
					className="font-montserrat text-darkGrey max-w-3xl mx-auto md:text-lg"
				>
					{' '}
					I am a Full stack Javascript developer. I have a passion for creating robust and scalable web applications using modern
					technologies and frameworks. I spend my day coding, learning new technologies and working with my hands to make magic on the
					internet.{' '}
				</motion.p>
				<a href="#project-sec">
					<motion.button
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2 }}
						viewport={{ once: true }}
						className="bg-primaryYellow mx-auto py-4 px-20 text-lg tracking-wider font-bold cursor-pointer drop-shadow-md"
					>
						PROJECTS
					</motion.button>
				</a>
			</div>
		</div>
	);
};

export default HeroHeader;
