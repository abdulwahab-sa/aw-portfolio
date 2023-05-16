import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myPic from '../assets/abdulwahab-picture.jpg';
import hamMenu from '../assets/ham-menu.svg';
import hamMenuClose from '../assets/ham-menu-close.svg';

const navLinks = [
	{
		id: 1,
		title: 'Home',
		path: '#home-sec',
	},
	{
		id: 2,
		title: 'About',
		path: '#about-sec',
	},
	{
		id: 3,
		title: 'Projects',
		path: '#project-sec',
	},
	{
		id: 4,
		title: 'Contact',
		path: '#contact-sec',
	},
];

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<div className="w-full h-full flex items-center justify-between px-4 py-3 md:px-12 md:py-5 bg-white drop-shadow-sm">
				<div className="flex items-center space-x-3">
					<img src={myPic} alt="" className="h-12 rounded-full border border-primaryYellow" />
					<span className="text-md font-bold tracking-widest text-darkGrey hover:text-primaryYellow transition-all cursor-pointer">
						ABDUL WAHAB
					</span>
				</div>
				<div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? <img src={hamMenuClose} alt="" className="w-7" /> : <img src={hamMenu} alt="" className="w-7" />}
				</div>
				<div className="hidden md:flex">
					<ul className="flex items-center space-x-12">
						{navLinks.map((link) => (
							<li
								className="uppercase text-md font-bold tracking-wider text-darkGrey hover:text-primaryYellow transition-all cursor-pointer"
								key={link.id}
							>
								<a href={link.path}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<AnimatePresence>
				{showMenu && (
					<motion.div
						className="absolute top-16 right-0 left-0 h-auto w-full flex flex-col bg-white text-darkGrey"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						{navLinks.map((link) => (
							<span className="border border-lightGrey uppercase text-sm font-medium px-4 py-5 tracking-wider " key={link.id}>
								<a href={link.path} onClick={() => setShowMenu(!showMenu)}>
									{link.title}
								</a>
							</span>
						))}
					</motion.div>
				)}
				l{' '}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
