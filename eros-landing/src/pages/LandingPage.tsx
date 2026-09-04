import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import PrototypeShowcase from '../components/PrototypeShowcase'
import ProblemScale from '../components/ProblemScale'
import CoreInsight from '../components/CoreInsight'
import TimeCritical from '../components/TimeCritical'
import SIRENDifference from '../components/SIRENDifference'
import HowSIRENCreatesValue from '../components/HowSIRENCreatesValue'
import Feasibility from '../components/Feasibility'
import ImpactSection from '../components/ImpactSection'
import Scalability from '../components/Scalability'
import ResearchComparison from '../components/ResearchComparison'
import ImpactFlywheel from '../components/ImpactFlywheel'
import PublishedResearch from '../components/PublishedResearch'
import TeamSection from '../components/TeamSection'
import FinalCTA from '../components/FinalCTA'
import SourcesPanel from '../components/SourcesPanel'
import Footer from '../components/Footer'
import RouteMotif from '../components/RouteMotif'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <RouteMotif />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <VideoSection />
          <PrototypeShowcase />
          <ProblemScale />
          <CoreInsight />
          <TimeCritical />
          <SIRENDifference />
          <HowSIRENCreatesValue />
          <Feasibility />
          <ImpactSection />
          <Scalability />
          <ResearchComparison />
          <ImpactFlywheel />
          <PublishedResearch />
          <TeamSection />
          <FinalCTA />
        </main>
        <SourcesPanel />
        <Footer />
      </div>
    </div>
  )
}
