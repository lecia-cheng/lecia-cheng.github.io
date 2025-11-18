import Header from '@/components/Header';
import TypingTitle from '@/components/TypingTitle';
import Image from 'next/image';
import misoImage from '@/assets/miso.jpg';
import tangyImage from '@/assets/tangy.jpg';
import nourishnowImage from '@/assets/nourishnow.jpg';
import reRecorderImage from '@/assets/re-recorder.jpg';
import speeddialImage from '@/assets/speeddial.jpg';
import goosepainterImage from '@/assets/goosepainter.jpg';

const projects = [
  {
    id: 1,
    title: "MISO",
    subtitle: "Miso - 🏆 1st Place @ UofTHacks X",
    description: "Say goodbye to misogyny in your Workplace",
    links: [
      { name: "Devpost", url: "https://devpost.com/software/miso" },
      { name: "Github", url: "https://github.com/stanleyylin/Miso" } 
    ],
    mockupColor: "#fff",
    image: misoImage,
    link: "https://devpost.com/software/miso"
  },
  {
    id: 2,
    title: "Tangy",
    subtitle: "Tangy Rewards -🏆1st Place @ S:/HA<KS (Scotiabank x Tangerine)",
    description: "",
    links: [],
    mockupColor: "#fff",
    image: tangyImage,
    link: "https://www.figma.com/proto/AodJz8OJEDPTLSwUpRZDDF/SHacks2023?node-id=50-705&node-type=canvas&t=I59LrTvYvJjzspj1-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=50%3A705"
  },
  {
    id: 3,
    title: "NourishNow",
    subtitle: "NourishNow - 🏆2nd Place @ MapleHacks in SDG",
    description: "",
    links: [],
    mockupColor: "#fff",
    image: nourishnowImage,
    link: "https://devpost.com/software/norishnow"
  },
  {
    id: 4,
    title: "Re-corder",
    subtitle: "Re-Recorder - UofTHacks",
    description: "",
    links: [],
    mockupColor: "#fff",
    image: reRecorderImage,
    link: "https://devpost.com/software/re-recorder"
  },
  {
    id: 5,
    title: "SpeedDial",
    subtitle: "SpeedDial - Hack Western",
    description: "",
    links: [],
    mockupColor: "#fff",
    image: speeddialImage,
    link: "https://devpost.com/software/speeddial"
  },
  {
    id: 6,
    title: "GoosePainter",
    subtitle: "GoosePainter - Hack The North",
    description: "",
    links: [],
    mockupColor: "#fff",
    image: goosepainterImage,
    link: "https://devpost.com/software/goose-painter"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-20">
        <div className="text-center mb-12 md:mb-20">
          <TypingTitle 
            text="Projects + Hackathons" 
            className="text-5xl md:text-6xl font-normal font-serif inline-block"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col group cursor-pointer relative"
            >
              <div
                className="w-full overflow-hidden relative min-h-[300px] md:min-h-[400px] transition-all duration-300 ease-out transform group-hover:-translate-y-3 group-hover:shadow-2xl rounded-lg"
                style={{ backgroundColor: project.mockupColor }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white text-lg md:text-xl font-semibold tracking-tight font-serif pointer-events-none">
                    Click to learn more
                  </p>
                </div>
              </div>
              {project.subtitle && (
                <div className="mt-6 flex items-center gap-2">
                  <p className="text-sm md:text-base font-semibold text-[#1a1a1a] tracking-tight font-serif whitespace-nowrap">
                    {project.subtitle}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

