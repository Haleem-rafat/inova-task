import HeroCarouselSection from './_Componets/HeroCarouselSection';
import LatestNews from './_Componets/LatestNews';

export default function Home(): JSX.Element {
  return (
    <div>
      <HeroCarouselSection />
      <div className="mx-auto max-w-7xl">
        <LatestNews />
      </div>
    </div>
  );
}
