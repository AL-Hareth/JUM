import { client } from "@/utils/sanity/client";
import QuestionCard from "../(compoents)/QuestionCard";

export default async function QuizPage({ params }: { params: { category: string; slug: string } }) {

	const quiz = (await client.fetch(`*[_type == 'quizz' && slug.current == $slug][0] {
		title,
		slug,
		questions[],
	}`, { slug: params.slug }));

	const answersList = quiz.questions ? quiz.questions.map((question: any) => {
		return question.correctOption;
	}) : [];
	return (
		<div className="min-h-screen bg-gray-900 px-20 py-10">
			<h1 className="text-5xl font-bold text-center py-4">{quiz.title}</h1>
			<QuestionCard questions={quiz.questions} answersList={answersList} />
		</div>
	);
}
