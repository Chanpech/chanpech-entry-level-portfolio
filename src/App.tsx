import './App.css'
import Header from './components/Header';
import Introduction from './components/Introduction';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Certification from "./components/Certification";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <Introduction />
        <WorkExperience />
        <Projects />
        <Courses />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
