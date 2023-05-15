const skills = [
	{
		id: 1,
		title: 'HTML',
	},
	{ id: 2, title: 'CSS' },
	{ id: 3, title: 'JavaScript' },
	{ id: 4, title: 'React' },
	{ id: 5, title: 'Node.js' },
	{ id: 6, title: 'Express' },
	{ id: 7, title: 'MongoDB' },
	{
		id: 8,
		title: 'MYSQL',
	},
	{
		id: 9,
		title: 'POSTGRESQL',
	},

	{
		id: 10,
		title: 'REST API',
	},
	{
		id: 11,
		title: 'Tailwind CSS',
	},
	{
		id: 12,
		title: 'Bootstrap',
	},
	{
		id: 13,
		title: 'Material UI',
	},

	{ id: 14, title: 'Git' },
	{ id: 15, title: 'Figma' },
];

const AboutSection = () => {
	return (
		<div className="flex flex-col space-y-12 py-16 px-6 bg-bgGrey text-darkGrey ">
			<div className="flex flex-col mx-auto text-center space-y-10">
				<h3 className="section-title text-2xl md:text-4xl font-bold tracking-widest ">ABOUT ME</h3>
				<p className="font-montserrat md:max-w-3xl font-normal text-md md:text-lg">
					Here you will find more information about me, what I do and my current skills in terms of programming and technologies.
				</p>
			</div>
			<div className="space-y-8 font-montserrat lg:flex lg:justify-center lg:space-x-16 lg:px-20 lg:items-start lg:space-y-0 ">
				<div className="space-y-4 md:max-w-lg ">
					<h4 className="text-lg font-bold"> Get to know me! </h4>
					<p className="">
						{' '}
						I am an enthusiastic and experienced Full Stack <b>JavaScript Developer</b>, dedicated to crafting exceptional web applications
						with a focus on JavaScript and its diverse ecosystem of libraries and frameworks. Each day, you will find me immersed in lines
						of code, continuously expanding my knowledge and keeping up with the latest industry trends.{' '}
					</p>
					<p className="">
						{' '}
						From <b>frontend</b> development to <b>backend</b> infrastructure, I embrace the full stack and love architecting efficient and
						elegant systems. As a quick learner, I am always excited to tackle new challenges head-on. I am ready to take on new and
						exciting projects. Let`s work together to make magic on the internet and transform your vision into a reality.{' '}
					</p>
				</div>
				<div className="space-y-6 md:max-w-lg">
					<h4 className="text-lg font-bold"> My Skills </h4>
					<div className="flex flex-wrap">
						{skills.map((skill) => (
							<span key={skill.id} className=" py-2 px-4 m-2 rounded-md  bg-skillGrey font-semibold text-mediumGrey text-sm">
								{' '}
								{skill.title}{' '}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
