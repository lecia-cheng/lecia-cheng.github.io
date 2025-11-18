import Header from '@/components/Header';
import ChatBubbles from '@/components/ChatBubbles';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-start px-5 md:px-10 py-10 md:py-20 gap-8 md:gap-16">
          <div className="flex-1 max-w-[500px] w-full">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-normal leading-tight mb-8 font-serif ml-8 md:ml-16">
              Hi, I&apos;m Lecia!<br />
              An <em>Engineer</em>.
              Product <em>Builder</em>.
              Problem <em>Solver</em>.
            </h1>
            <button className="bg-[#e5e5e5] border-none px-8 py-3 rounded-lg text-base cursor-pointer transition-colors hover:bg-[#d0d0d0] ml-8 md:ml-16">
              Learn more
            </button>
          </div>
          <div className="flex-1 flex justify-center items-start w-full md:w-auto">
            <ChatBubbles />
          </div>
        </div>

        {/* Image Carousel */}
        <div className="px-5 md:px-10 pb-16">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}
