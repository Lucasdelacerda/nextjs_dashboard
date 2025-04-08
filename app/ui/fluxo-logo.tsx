import Image from 'next/image';

export default function FluxoDigitalLogo() {
  return (
    <div
      className={`flex items-flex-end justify-start md:items-center md:justify-center`}
    >
      <Image 
        src="/logo.png" 
        alt="Fluxo Digital logo" 
        width={96}
        height={96}
        className="h-12 w-12 md:h-24 md:w-24" 
      />
    </div>
  );
}
