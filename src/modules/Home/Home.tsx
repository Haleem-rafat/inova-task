import ExploreOurCourse from './_Componets/ExploreOurCourse';
import Footer from './_Componets/Footer';
import HeroCarouselSection from './_Componets/HeroCarouselSection';
import LatestNews from './_Componets/LatestNews';

export default function Home(): JSX.Element {
  return (
    <div>
      <HeroCarouselSection />
      <div className="mx-auto max-w-7xl">
        <LatestNews />
        <ExploreOurCourse />
      </div>
      <Footer />
    </div>
  );
}
