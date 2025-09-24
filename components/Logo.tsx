import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={className}
      alt="logo"
      height={100}
      width={100}
      src={'/logo/logo.png'}
    />
  );
}
