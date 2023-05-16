import { motion } from 'framer-motion';
import tradecity from '../assets/projects/tradecityproject.png';
import pentago from '../assets/projects/pentago.png';
import tradecityadmin from '../assets/projects/tradecityadmin.png';
import coffeecan from '../assets/projects/coffeecan.png';
import textly from '../assets/projects/textly.png';
import notesapp from '../assets/projects/notesapp.png';

const projects = [
	{
		id: 1,
		img: tradecity,
		title: 'Trade City',
		description:
			'Trade City is a clothing manufacturing company that has business spanning across the globe. I created their multipage website using my development skills to build their online presence, make them stand out among their competitors and provide a better user experience for all types of devices',
		skills: ['React', 'Styled Components', 'React Router', 'GIT', 'Github', 'Netlify'],
		demo: 'https://tradecity.netlify.app',
		github: 'https://github.com/abdulwahab-sa/sportscompanyportfolio',
	},
	{
		id: 2,
		img: tradecityadmin,
		title: 'Trade City Admin Dashboard',
		description:
			'I created the Dashboard for Trade City using React, Material UI and Styled Components. The dashboard is used by the company to manage their products and customer inquiries.',
		skills: ['React', 'Styled Components', 'Material UI', 'Axios', 'GIT', 'Github', 'Netlify'],
		demo: 'https://tradecity.netlify.app/dashboard',
		github: 'https://github.com/abdulwahab-sa/sportscompanyportfolio',
	},
	{
		id: 3,
		img: pentago,
		title: 'Pentago Mfg',
		description:
			'I created the website for Pentago Mfg using React and Tailwind. The website is used by the company to showcase their products and services. The website is also used to generate leads for the company. ',
		skills: ['React', 'Tailwind', 'Framer Motion', 'Axios', 'GIT', 'Github', 'Netlify'],
		demo: 'https://pentagomfg.netlify.app',
		github: 'https://github.com/abdulwahab-sa/pentagomfg',
	},
	{
		id: 4,
		img: coffeecan,
		title: 'Coffecan Insights',
		description:
			'I created the landing page for this startup. The company is a data analytics company that provides data analytics services to other companies using Open AI. The purpose of landing page was to present the company to potential investors and partners.',
		skills: ['HTML', 'Javascript', 'Tailwind', 'Framer Motion'],
		demo: 'https://coffeecaninsights.netlify.app/',
		github: 'https://github.com/abdulwahab-sa/coffeecaninsights',
	},

	{
		id: 5,
		img: textly,
		title: 'Textly',
		description:
			'Textly is a text formatter app which can count characters, capitalize letters, remove extra space from text and other formatting as well. I used React and Bootstrap to create this app.',
		skills: ['React', 'Bootstrap', 'GIT', 'Github', 'Netlify'],
		demo: 'https://textly-text.netlify.app/',
		github: 'https://github.com/abdulwahab-sa/textly',
	},
	{
		id: 6,
		img: notesapp,
		title: 'Notes App',
		description: 'A simple notes app for taking notes and saving them. The app uses local Storage to save the notes.',
		skills: ['React', 'Vanilla CSS', 'GIT', 'Github', 'Netlify'],
		demo: 'https://abduls-notes-app.netlify.app/',
		github: 'https://github.com/abdulwahab-sa/notes-app',
	},
];

const ProjectSection = () => {
	return (
		<div id="project-sec" className="w-full flex flex-col py-16 px-6 bg-gray-50 text-darkGrey space-y-16">
			<div className="flex flex-col mx-auto text-center space-y-10">
				<h3 className="section-title text-2xl md:text-4xl font-bold tracking-widest ">PROJECTS</h3>
				<p className="font-montserrat md:max-w-3xl font-normal text-md md:text-lg">
					Here you will find some of the personal and clients projects that I created with each project containing its description, live
					demo and source code.
				</p>
			</div>
			<div className="flex flex-col space-y-24 ">
				{projects.map((project) => (
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9 }}
						viewport={{ once: true }}
						key={project.id}
						className="flex flex-col space-y-10 font-montserrat lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-12 lg:items-center"
					>
						<img src={project.img} alt="" className="w-full h-full max-w-xl mx-auto lg:w-1/2 lg:mx-0" />
						<div className="flex flex-col space-y-8 text-center lg:space-y-4 lg:w-2/5">
							<h4 className="text-xl lg:text-2xl font-bold"> {project.title} </h4>
							<p className="max-w-xl mx-auto">{project.description}</p>
							<div className="flex flex-wrap text-center mx-auto">
								{project.skills.map((skill, i) => (
									<span key={i} className=" py-2 px-4 m-1 rounded-md  bg-skillGrey font-semibold text-mediumGrey text-sm">
										{skill}
									</span>
								))}
							</div>
							<div className="flex justify-center space-x-4">
								<a href={project.demo}>
									<button className="bg-primaryYellow  py-3 px-8 text-sm tracking-wider font-bold cursor-pointer drop-shadow-md rounded-md">
										DEMO
									</button>
								</a>
								<a href={project.github}>
									<button className="bg-primaryYellow  py-3 px-8 text-sm tracking-wider font-bold cursor-pointer drop-shadow-md rounded-md">
										GITHUB
									</button>
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ProjectSection;
