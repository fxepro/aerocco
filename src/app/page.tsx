import Blog from '@/components/sections/blog';
import Hero from '@/components/sections/hero';
import Investors from '@/components/sections/investors';
import Sustainability from '@/components/sections/sustainability';
import Technology from '@/components/sections/technology';

export default function Home() {
  return (
    <>
      <Hero />
      <Technology />
      <Sustainability />
      <Investors />
      <Blog />
    </>
  );
}
