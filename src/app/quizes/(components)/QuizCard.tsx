import Link from "next/link";

interface IProps {
  title: string;
  slug: { current: string };
  questions: number;
}

export default function QuizCard({ title, slug, questions }: IProps) {
  return (
    <div className="card bg-blue-950 w-full shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{questions} questions</p>
        <div className="card-actions justify-end">
          <Link href={`/quizes/${slug.current}`}>
            <button className="btn">Attempt Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
