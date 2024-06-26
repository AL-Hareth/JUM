import { client } from "@/utils/sanity/client";
import QuestionCard from "./(compoents)/QuestionCard";

export default async function Quiz({ params }: { params: { slug: string } }) {
  const quiz = (await client.fetch(` *[_type == "quizz" && slug.current == "${params.slug}"]| order(_createdAt asc)`))[0];

  const answersList = quiz.questions.map((question: any) => {
    return question.correctOption;
  })

  return (
    <div className="min-h-screen bg-gray-900 px-20 py-10">
      <h1 className="text-5xl font-bold text-center py-4">{quiz.title}</h1>
      <div className="grid place-items-start grid-cols-1 gap-4">
        <QuestionCard questions={quiz.questions} answersList={answersList} />
      </div>
    </div>
  );
}
