const AboutSection = () => {
	return (
		<div className="flex flex-col py-16 px-6 bg-bgGrey text-darkGrey border border-red-400">
			<div className="flex flex-col mx-auto text-center space-y-5">
				<h3 className="text-2xl md:text-4xl font-bold tracking-widest ">ABOUT ME</h3>
				<p className="font-montserrat md:max-w-3xl font-normal md:text-lg">
					Here you will find more information about me, what I do and my current skills in terms of programming and technologies.
				</p>
			</div>
			<div
				className="
            "
			>
				<div className="">
					<h4> Get to know me! </h4>
					<p>
						{' '}
						I`m an enthusiastic and experienced Full Stack <b>JavaScript Developer</b>, dedicated to crafting exceptional web applications
						with a focus on JavaScript and its diverse ecosystem of libraries and frameworks. Each day, you will find me immersed in lines
						of code, continuously expanding my knowledge and keeping up with the latest industry trends.{' '}
					</p>
					<p>
						{' '}
						From <b>frontend</b> development to <b>backend</b> infrastructure, I embrace the full stack and love architecting efficient and
						elegant systems. As a quick learner, I`m always excited to tackle new challenges head-on. I am ready to take on new and exciting
						projects. Let`s work together to make magic on the internet and transform your vision into a reality.{' '}
					</p>
				</div>
				<div className=""></div>
			</div>
		</div>
	);
};

export default AboutSection;
