type Props = {
  title: string;
};

export default function SkillCard({ title }: Props) {
  return (
    <div className="glass-card p-6 rounded-2xl hover:border-blue-400/60 transition hover:-translate-y-1 duration-300">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}