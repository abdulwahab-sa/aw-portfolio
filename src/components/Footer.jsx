import github from '../assets/social/github-icon.png';
import insta from '../assets/social/insta-icon.png';
import linkedin from '../assets/social/linkedin-icon.png';
import email from '../assets/social/email-icon.png';

const social = [
	{
		id: 1,
		icon: github,
		link: 'https://github.com/abdulwahab-sa',
	},
	{
		id: 2,
		icon: linkedin,
		link: 'https://www.linkedin.com/in/abdul-wahab-sa-dev/',
	},
	{
		id: 3,
		icon: insta,
		link: 'https://www.linkedin.com/in/abdul-wahab-sa-dev/',
	},
	{
		id: 4,
		icon: email,
		link: 'mailto:abdulw.dev@gmail.com',
	},
];

const Footer = () => {
	return (
		<div className="py-12 px-8 lg:px-20 bg-darkGrey font-montserrat">
			<div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
				<div className="space-y-3">
					<h6 className="text-primaryYellow text-md lg:text-lg font-bold tracking-widest">ABDUL WAHAB</h6>
					<p>Full Stack Developer creating magic on the internet.</p>
				</div>
				<div className="space-y-3 flex flex-col ">
					<h6 className="text-primaryYellow text-md lg:text-lg font-bold tracking-widest">SOCIAL</h6>
					<div className="flex items-center space-x-3">
						{social.map((item) => (
							<a href={item.link} key={item.id} className="">
								{' '}
								<img src={item.icon} alt="" className="w-6 object-contain" />{' '}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
