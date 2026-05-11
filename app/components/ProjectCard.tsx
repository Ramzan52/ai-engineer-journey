import Image from "next/image";

type Props = {
  title: string;
  description: string;
  stack: string[];
  image?: string;
};

export default function ProjectCard({
  title,
  description,
  stack,
  image,
}: Props) {
  return (
    <div className="group glass-card rounded-3xl overflow-hidden hover:border-purple-400/60 transition hover:-translate-y-2 duration-300">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 gradient-text">
          {title}
        </h3>

        <p className="text-gray-300 mb-5 leading-7">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="text-sm bg-black/40 border border-white/10 px-3 py-1 rounded-full text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}