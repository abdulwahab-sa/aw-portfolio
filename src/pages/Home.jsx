import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
