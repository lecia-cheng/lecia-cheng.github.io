import Image from 'next/image';
import Header from '@/components/Header';
import TypingTitle from '@/components/TypingTitle';
import wai from '@/assets/wai.jpg';
import awspic from '@/assets/awspic.jpg';
import scotia from '@/assets/scotia.jpg';
import projectlead from '@/assets/projectlead.jpg';

export default function Experiences() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-20">
        <div className="text-center mb-12 md:mb-20">
          <TypingTitle 
            text="Professional Experiences" 
            className="text-5xl md:text-6xl font-normal font-serif inline-block"
          />
        </div>

        {/* AWS Experience */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 w-full md:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-[#666] bg-[#f5f5f5] rounded-full tracking-wider uppercase mb-4">
                  Summer 2025
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#0a0a0a] leading-tight tracking-tight">
                Customer Solutions Manager Intern
              </h3>
              <p className="text-xl md:text-2xl text-[#4a5568] mb-10 font-normal italic">Amazon Web Services (AWS)</p>
              <ul className="list-none p-0 space-y-6">
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Led a strategic deep dive</span> for a $10M+ greenfield enterprise client, analyzing system architecture to align AWS solutions (EC2, Lambda, DynamoDB, AWS SQS).
                </li>
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Coordinated end-to-end development</span> for a personalized retirement plan chatbot using Amazon Bedrock&apos;s Anthropic API
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[550px] overflow-hidden rounded-xl shadow-lg">
              <Image src={awspic} alt="AWS Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Scotiabank Experience */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start">
            <div className="flex-1 w-full md:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-[#666] bg-[#f5f5f5] rounded-full tracking-wider uppercase mb-4">
                  Summer 2024
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#0a0a0a] leading-tight tracking-tight">
                Software Engineer Intern
              </h3>
              <p className="text-xl md:text-2xl text-[#4a5568] mb-10 font-normal italic">Scotiabank</p>
              <ul className="list-none p-0 space-y-6">
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Spearheaded the modernization</span> of Dynamic.ca utilizing Adobe Experience Manager (AEM) and the CRXDE environment
                </li>
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Solved a critical pain point</span> by conducting user research, developing an app aimed at assisting vulnerable clients
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[550px] overflow-hidden rounded-xl shadow-lg">
              <Image src={scotia} alt="Scotiabank Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Code Ninjas Experience */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 w-full md:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-[#666] bg-[#f5f5f5] rounded-full tracking-wider uppercase mb-4">
                  Summer 2023
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#0a0a0a] leading-tight tracking-tight">
                Project Manager Intern
              </h3>
              <p className="text-xl md:text-2xl text-[#4a5568] mb-10 font-normal italic">Code Ninjas</p>
              <ul className="list-none p-0 space-y-6">
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Led the integration</span> of a CRM system, and dissected complex ideas into understandable specifications
                </li>
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Engaged with product stakeholders</span> and held weekly consultations with clients, conducting market research and providing progress updates and ensuring alignment with their needs.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[550px] overflow-hidden rounded-xl shadow-lg">
              <Image src={projectlead} alt="Code Ninjas Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* WAI Experience */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-1/2 h-[400px] md:h-[550px] overflow-hidden rounded-xl shadow-lg">
              <Image src={wai} alt="WAI Team" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 w-full md:w-1/2">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-[#666] bg-[#f5f5f5] rounded-full tracking-wider uppercase mb-4">
                  Leadership
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#0a0a0a] leading-tight tracking-tight">
                President
              </h3>
              <p className="text-xl md:text-2xl text-[#4a5568] mb-10 font-normal italic">Western Artificial Intelligence (WAI)</p>
              <ul className="list-none p-0 space-y-6">
                <li className="pl-6 relative leading-relaxed text-base md:text-lg text-[#2d3748] before:content-['▸'] before:absolute before:left-0 before:text-[#007bff] before:font-bold before:text-lg">
                  <span className="font-bold text-[#0a0a0a]">Led the creation of 2 major hackathons</span> at Western University, leading a team of 60+ executives. Encompassing over 300+ attendees nationwide, fostering technical skill development and attention to global issues
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

