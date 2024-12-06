import Image from 'next/image';

type SocialMediaProps = {
  size: number;
};

function SocialMedia({ size }: SocialMediaProps) {
  return (
    <div
      className="flex justify-center gap-4 pb-4"
      style={{ pointerEvents: 'auto' }}
    >
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-transform hover:scale-110 scale-100"
        href="https://www.linkedin.com/in/lukarakic-career/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn Icon"
          width={size}
          height={size}
        />
      </a>
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-transform hover:scale-110 scale-100"
        href="https://github.com/LukaRakic00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={size}
          height={size}
        />
      </a>
      <a
        className="bg-black bg-opacity-50 p-4 rounded-full transition-transform hover:scale-110 scale-100"
        href="https://www.researchgate.net/profile/Luka-Rakic-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/researchgate.svg"
          alt="ResearchGate Icon"
          width={size}
          height={size}
        />
      </a>
    </div>
  );
}

export default SocialMedia;
