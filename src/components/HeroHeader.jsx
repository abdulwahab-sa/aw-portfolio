const HeroHeader = () => {
	return (
		<div className="hero-section text-darkGrey flex items-center justify-center">
			<div className="flex flex-col space-y-8 md:space-y-10 mx-auto mt-16 px-6 text-center">
				<h2 className="text-4xl font-bold tracking-wider md:text-6xl "> HEY, I`M ABDUL WAHAB </h2>
				<p className="font-montserrat text-darkGrey max-w-3xl mx-auto md:text-lg">
					{' '}
					I am a Full stack Javascript developer. I have a passion for creating robust and scalable web applications using modern
					technologies and frameworks. I spend my day coding, learning new technologies and working with my hands to make magic on the
					internet.{' '}
				</p>

				<button className="bg-primaryYellow mx-auto py-4 px-20 text-lg tracking-wider font-bold cursor-pointer drop-shadow-md">
					PROJECTS
				</button>
			</div>
		</div>
	);
};

export default HeroHeader;
