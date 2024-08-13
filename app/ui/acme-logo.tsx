import { TrophyIcon  } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
// import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <TrophyIcon  className="h-12 w-12 mr-4" />
      {/* <Image
        src="/logo.png"
        width={512}
        height={512}
        className="h-12 w-12  mr-4"
        alt="Logo"
      /> */}
      <p className="text-[32px]">悦景</p>
    </div>
  );
}
