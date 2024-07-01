import Link from "next/link";

interface IProps {
  title: string;
  slug: { current: string };
}

export default function QuizCard({ title, slug }: IProps) {
  return (
    <div className="text-white card bg-blue-950 w-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/quizes/${slug.current}`}>
            <button className="btn">See Quizes</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
