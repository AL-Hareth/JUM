import { client } from "@/utils/sanity/client";
import QuestionCard from "./(compoents)/QuestionCard";
import Link from "next/link";

export default async function Quiz({ params }: { params: { category: string } }) {
  const categories = (await client.fetch(`*[_type == 'category' && slug.current == $category][0] {
    category,
      slug {current},
    "quizes": *[_type=='quizz' && references(^._id)]
  }`, { category: params.category }));

  return (
    <div className="min-h-screen bg-gray-900 px-20 py-10">
      <h1 className="text-5xl font-bold text-center py-4">{categories.category}</h1>
      <div className="grid place-items-start grid-cols-1 gap-4">
        {categories.quizes.map((quiz: any) => (
          <div key={quiz.slug.current} className="card bg-blue-950 w-full shadow-xl p-4 my-2">
            <h3 className="text-3xl font-bold mb-3 text-center">{quiz.title}</h3>
            <Link className="btn btn-primary" href={`/quizes/${params.category}/${quiz.slug.current}`}>Attempt Quiz</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
