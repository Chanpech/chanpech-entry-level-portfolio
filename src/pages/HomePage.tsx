import Header from '../components/Header';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import Courses from '../components/Courses';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Certification from "../components/Certification";
import CurrentProjects from '../components/CurrentProjects';
import WelcomeIntroContainer from '../components/WelcomeIntroContainer';
import References from '../components/References';
import GoogleAnalytics from '../components/analytics/GoogleAnalytics.js';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <GoogleAnalytics />
          <Header />
          <WelcomeIntroContainer />
          <main className='container mx-auto px-4 py-8'>
            <WorkExperience />
            <Projects />
            <Courses />
            <Certification />
            <CurrentProjects />
            <References />
            <Contact />
          </main>
          <Footer />
        </div>
      )
}

export default HomePage;