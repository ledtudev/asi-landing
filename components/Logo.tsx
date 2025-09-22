import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      alt="logo"
      height={30}
      width={30}
      src={'/logo/logo.png'}
    />
  );
}
