import Image from 'next/image';

const partners = [
  {
    name: 'Pratham Verma',
    handle: '@_Pratham_verma_',
    avatar: '/images/avatars/pratham.png', // Thay bằng đường dẫn ảnh thật
    content:
      'The concept of cards is really unique.....gonna use in next project',
  },
  {
    name: 'Andre Flores',
    handle: '@thegrowthcoder',
    avatar: '/images/avatars/andre1.png', // Thay bằng đường dẫn ảnh thật
    content: 'Simple yet effective design. could boost conversions massively.',
  },
  {
    name: 'Michèle du Toit',
    handle: '@michele_dutoit',
    avatar: '/images/avatars/michele.png', // Thay bằng đường dẫn ảnh thật
    content: 'This is beautifully designed',
  },
  {
    name: 'Andre Flores',
    handle: '@andremflores',
    avatar: '/images/avatars/andre2.png', // Thay bằng đường dẫn ảnh thật
    content: 'Looks slick Thi!',
  },
  {
    name: 'midecreatives',
    handle: '@Kendav_UI',
    avatar: '/images/avatars/mide.png', // Thay bằng đường dẫn ảnh thật
    content: 'Wow this is nice',
  },
  {
    name: 'DL | Web Designs',
    handle: '@0xdldev',
    avatar: '/images/avatars/dl.png', // Thay bằng đường dẫn ảnh thật
    content: 'Pretty decent work!',
  },
  {
    name: 'Popula Tech',
    handle: '@AAIremotely',
    avatar: '/images/avatars/popula.png', // Thay bằng đường dẫn ảnh thật
    content: 'This is beautiful!',
  },
];

const PartnerCard = ({
  name,
  handle,
  avatar,
  content,
}: (typeof partners)[0]) => (
  <figure className="flex-shrink-0 w-[350px] p-1 flex flex-col gap-1">
    <figcaption className="flex items-center gap-3">
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="rounded-full bg-gray-100 object-cover"
      />
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{handle}</p>
      </div>
    </figcaption>
    <blockquote className="text-gray-700 leading-relaxed">
      <p>{content}</p>
    </blockquote>
  </figure>
);

export default function PartnersMarquee() {
  return (
    <section className="py-24">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="mx-4">
              <PartnerCard {...partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
