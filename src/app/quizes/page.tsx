import { client } from "@/utils/sanity/client";
import QuizCard from "./(components)/QuizCard";

interface Quiz {
  title: string;
  slug: { current: string };
  questions: {
    text: string;
  }[];
}

export default async function Quizes() {
  const quizes = await client.fetch(`*[_type == "quizz"] | order(_createdAt asc)  {
    title,
    slug { current },
    questions[] { text }
  }
`);

  return (
    <div className="min-h-screen bg-gray-900 px-20 py-10">
      <h1 className="text-5xl font-bold text-center py-4 mb-2">Quizes</h1>
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
        {quizes.map((quiz: Quiz) => (
          <QuizCard
            key={quiz.slug.current}
            title={quiz.title}
            slug={quiz.slug}
            questions={quiz.questions ? quiz.questions.length : 0}
          />
        ))}
      </div>
    </div>
  );
}
