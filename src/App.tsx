import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import CoreCompetenciesSection from './components/CoreCompetenciesSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import AcademicSection from './components/AcademicSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeSection />
        <CoreCompetenciesSection />
        <WorkExperienceSection />
        <AcademicSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
