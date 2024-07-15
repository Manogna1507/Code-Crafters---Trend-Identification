import './Games.css';

const GameOver = ({ tries, setGameOver, shuffleImages }) => {
    const handleClick = () => {
        shuffleImages();
    };

    return (
        <div className="game-over">
            <div className="box">
                <h2>Game Over!</h2> {/* Add a heading */}
                <p>You finished in {tries} tries.</p> {/* Use a paragraph for the statement */}
                <button onClick={handleClick}>Play Again</button>
            </div>
        </div>
    );
}

export default GameOver;
