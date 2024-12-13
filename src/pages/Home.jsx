import AnalyticSection from "../components/AnalyticSection";
import ArticleSection from "../components/ArticleSection";
import CompanySection from "../components/CompanySection";
import CtaSection from "../components/CtaSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import IntegrationSection from "../components/IntegrationSection";
import OverviewSection from "../components/OverviewSection";
import TrackSection from "../components/TrackSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CompanySection />
      <OverviewSection />
      <FeatureSection />
      <TrackSection />
      <IntegrationSection />
      <AnalyticSection />
      <ArticleSection />
      <CtaSection />
    </main>
  );
};

export default Home;
