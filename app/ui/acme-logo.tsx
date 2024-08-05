// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { TrophyIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <TrophyIcon className="h-12 w-12 rotate-[0deg]" />
      <p className="text-[33px]">YueJin</p>
    </div>
  );
}
