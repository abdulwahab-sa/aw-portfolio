import AboutSection from '../components/AboutSection';
import HeroHeader from '../components/HeroHeader';
import Navbar from '../components/Navbar';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroHeader />
			<AboutSection />
			<ProjectSection />
		</>
	);
};

export default Home;
