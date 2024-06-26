"use client";

import { useEffect, useState } from "react";

interface IProps {
	questions: {
		title: string;
		slug: { current: string };
		questions: {
			text: string;
			options: string[];
		}[];
	}[];
	answersList: number[];
}

function SolveAllQuestionsModal() {
	return (
		<dialog id="notSolvedQuestionsModal" className="modal">
			<div className="modal-box bg-red-600">
				<h3 className="font-bold text-lg">Not Completed!</h3>
				<p className="py-4">Please Make sure to solve all the questions</p>
				<div className="modal-action">
					<form method="dialog">
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

function SuccessModal() {
	return (
		<dialog id="successModal" className="modal">
			<div className="modal-box bg-green-600">
				<h3 className="font-bold text-lg">Yaaaah!</h3>
				<p className="py-4">Congratulations! You Got All Questions Solved Correctly</p>
				<div className="modal-action">
					<form method="dialog">
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

function GoodLuckNextTimeModal() {
	return (
		<dialog id="goodLuckNextTimeiModal" className="modal">
			<div className="modal-box bg-yellow-600">
				<h3 className="font-bold text-lg">:(</h3>
				<p className="py-4">Good Luck Next Time, You didn{"'"}t get all the questions correctly</p>
				<div className="modal-action">
					<form method="dialog">
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

export default function QuestionCard({ questions, answersList }: IProps) {
	const [answers, setAnswers] = useState<number[]>([]);
	const [isVisibleAnswers, setIsVisibleAnswers] = useState(false);

	const submitAnswers = () => {
		if (answers.length !== answersList.length || answers.every((answer: number) => !answer)) {
			(document.getElementById('notSolvedQuestionsModal') as HTMLDialogElement).showModal();
			return;
		}

		if (answers.every((answer: number, index: number) => answer === answersList[index])) {
			(document.getElementById('successModal') as HTMLDialogElement).showModal()
		} else {
			(document.getElementById('goodLuckNextTimeiModal') as HTMLDialogElement).showModal()
		}

		setIsVisibleAnswers(true);
	}

	return (
		<>
			<SolveAllQuestionsModal />
			<SuccessModal />
			<GoodLuckNextTimeModal />
			{questions.map((question: any, index: number) => {
				const questionIndex = index;
				return (
					<div key={index} className="card bg-blue-950 w-full shadow-xl">
						<div className="card-body">
							<h2 className="card-title mb-2">{question.text}</h2>
							{question.options.map((option: string, index: number) => (
								<div className={`flex items-center p-2 rounded ${isVisibleAnswers && index === question.correctOption ? "bg-[#00ae00]" : ""}`} key={index}>
									<input onChange={() => {
										setAnswers((prev: any) => {
											const newAnswers = [...prev];
											newAnswers[questionIndex] = index;
											return newAnswers;
										})
									}} type="radio" name={`question-${questionIndex}`} className="mr-2 radio inline radio-secondary" />
									<p className="text-md">{option}</p>
								</div>
							))}
						</div>
					</div>
				);
			})}
			<div className="flex">
				<button className="btn btn-primary" onClick={submitAnswers}>Submit</button>
			</div>
		</>
	);
}
