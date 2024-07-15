import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is a popular Gen Z fashion trend that involves reviving styles from the 2000s?',
			answerOptions: [
				{ answerText: 'Boho Chic', isCorrect: false },
				{ answerText: 'Y2K Fashion', isCorrect: true },
				{ answerText: 'Grunge', isCorrect: false },
				{ answerText: 'Athleisure', isCorrect: false },
			],
		},
		{
			questionText: 'Which social media platform is most influential in shaping Gen Z fashion trends?',
			answerOptions: [
				{ answerText: 'Facebook', isCorrect: false },
				{ answerText: 'Instagram', isCorrect: true },
				{ answerText: 'Twitter', isCorrect: false },
				{ answerText: 'LinkedIn', isCorrect: false },
			],
		},
		{
			questionText: 'Which brand is known for its oversized hoodies and streetwear that is popular among Gen Z?',
			answerOptions: [
				{ answerText: 'Gucci', isCorrect: false },
				{ answerText: 'Supreme', isCorrect: true },
				{ answerText: 'Prada', isCorrect: false },
				{ answerText: 'Ralph Lauren', isCorrect: false },
			],
		},
		{
			questionText: 'What type of footwear has become a staple in Gen Z fashion?',
			answerOptions: [
				{ answerText: 'High Heels', isCorrect: false },
				{ answerText: 'Sneakers', isCorrect: true },
				{ answerText: 'Loafers', isCorrect: false },
				{ answerText: 'Ballet Flats', isCorrect: false },
			],
		},
		{
			questionText: 'Which accessory is commonly used by Gen Z to personalize their outfits?',
			answerOptions: [
				{ answerText: 'Brooches', isCorrect: false },
				{ answerText: 'Bucket Hats', isCorrect: true },
				{ answerText: 'Pearl Necklaces', isCorrect: false },
				{ answerText: 'Silk Scarves', isCorrect: false },
			],
		},
		{
			questionText: 'Which designer is known as the "King of Fashion"?',
			answerOptions: [
				{ answerText: 'Coco Chanel', isCorrect: false },
				{ answerText: 'Giorgio Armani', isCorrect: false },
				{ answerText: 'Karl Lagerfeld', isCorrect: false },
				{ answerText: 'Christian Dior', isCorrect: true },
			],
		},
		{
			questionText: 'Which country is known for its luxury fashion brands such as Gucci and Prada?',
			answerOptions: [
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Italy', isCorrect: true },
				{ answerText: 'United States', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
			],
		},
		{
			questionText: 'What type of clothing is a "LBD"?',
			answerOptions: [
				{ answerText: 'Little Blue Dress', isCorrect: false },
				{ answerText: 'Long Black Dress', isCorrect: false },
				{ answerText: 'Little Black Dress', isCorrect: true },
				{ answerText: 'Linen Blue Dress', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of the high fashion week held annually in Paris, Milan, London, and New York?',
			answerOptions: [
				{ answerText: 'Fashion Gala', isCorrect: false },
				{ answerText: 'Style Week', isCorrect: false },
				{ answerText: 'Haute Couture Week', isCorrect: false },
				{ answerText: 'Fashion Week', isCorrect: true },
			],
		},
		{
			questionText: 'Which brand is known for its red-soled shoes?',
			answerOptions: [
				{ answerText: 'Jimmy Choo', isCorrect: false },
				{ answerText: 'Christian Louboutin', isCorrect: true },
				{ answerText: 'Manolo Blahnik', isCorrect: false },
				{ answerText: 'Stuart Weitzman', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}