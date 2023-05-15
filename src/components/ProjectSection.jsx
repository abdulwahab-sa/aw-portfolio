import tradecity from '../assets/projects/tradecityproject.png';

const ProjectSection = () => {
	return (
		<div className="w-full flex flex-col py-16 px-6 bg-gray-50 text-darkGrey space-y-16">
			<div className="flex flex-col mx-auto text-center space-y-10">
				<h3 className="section-title text-2xl md:text-4xl font-bold tracking-widest ">ABOUT ME</h3>
				<p className="font-montserrat md:max-w-3xl font-normal text-md md:text-lg">
					Here you will find some of the personal and clients projects that I created with each project containing its description, live
					demo and source code.
				</p>
			</div>
			<div className="flex flex-col ">
				<div className="flex flex-col space-y-10 font-montserrat lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-12 lg:items-center">
					<img src={tradecity} alt="" className="w-full h-full max-w-xl mx-auto lg:w-1/2 lg:mx-0" />
					<div className="flex flex-col space-y-8 text-center lg:space-y-6 lg:w-2/5">
						<h4 className="text-xl lg:text-2xl font-bold"> Trade City </h4>
						<p className="max-w-xl mx-auto">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsa incidunt reiciendis dolor corrupti porro, et
							blanditiis dolore voluptatibus quas harum impedit necessitatibus iusto nulla! Ad iure deserunt aliquid esse?
						</p>
						<div className="flex justify-center space-x-4">
							<button className="bg-primaryYellow  py-3 px-8 text-sm tracking-wider font-bold cursor-pointer drop-shadow-md rounded-md">
								DEMO
							</button>
							<button className="bg-primaryYellow  py-3 px-8 text-sm tracking-wider font-bold cursor-pointer drop-shadow-md rounded-md">
								GITHUB
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectSection;
