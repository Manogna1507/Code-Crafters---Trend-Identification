import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Games.css';
import GameOver from './GameOver';

function Games() {
    const arrayOfImages = [
        { num: 1, img: 'Accessories_ sunglasses.jpeg', isMatch: false },
        { num: 2, img: 'download (1).jpeg', isMatch: false },
        { num: 3, img: 'Forest green high tops.jpeg', isMatch: false },
        { num: 4, img: 'SHEIN MOD Camiseta Recortada.jpeg', isMatch: false },
        { num: 5, img: 'SHEIN Tie Dye Rib-knit Cami Top.jpeg', isMatch: false },
        { num: 6, img: 'Zenya Swirl Print Pant - XS.jpeg', isMatch: false },
    ];

    const [cards, setCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [tries, setTries] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const shuffleImages = () => {
        let shuffledArray = [...arrayOfImages, ...arrayOfImages]
            .map((item, index) => ({ ...item, id: index + 1 }))
            .sort(() => 0.5 - Math.random());
        setScore(0);
        setTries(0);
        setCards(shuffledArray);
        setSelectedCards([]);
        setGameOver(false);
    };

    useEffect(() => {
        shuffleImages();
    }, []);

    useEffect(() => {
        if (selectedCards.length === 2) {
            setTimeout(() => {
                setSelectedCards([]);
            }, 1000);
            checkMatch();
        }
    }, [selectedCards]);

    const checkMatch = () => {
        if (selectedCards[0].num === selectedCards[1].num) {
            setScore((prev) => prev + 1);
            let updatedCards = cards.map((card) => {
                if (card.num === selectedCards[0].num) {
                    return { ...card, isMatch: true };
                }
                return card;
            });
            setCards(updatedCards);
        } else {
            setTries((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (score === arrayOfImages.length) {
            setTimeout(() => {
                setGameOver(true);
            }, 1000);
        }
    }, [score]);

    return (
        <>
            {gameOver && <GameOver tries={tries} setGameOver={setGameOver} shuffleImages={shuffleImages} />}
            <div className="container">
                <div className='score-container'>
                    <div className='score'>Score: {score}</div>
                    <div className='tries'>Tries: {tries}</div>
                </div>
                <div className='cards-container'>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            setSelectedCards={setSelectedCards}
                            selectedCards={selectedCards}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Games;
