import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    chunkArrayToSmallerParts,
    shuffleArray,
    addCurrentAnswerToArray,
} from "@/Helpers/ArrayHelpers";
import {
    numbersToFindInWords,
    numbersToShowOnCards,
} from "./FindNumbersGameData";
import { getRandomLightColor } from "@/Helpers/LightColorGeneratorHelper";
import CardComponents from "@/Components/GameComponents/CardComponent/CardComponent";
import FeedbackMessageComponent from "@/Components/GameComponents/FeedbackMessageComponent/FeedbackMessageComponent";

const FindNumbersGame = () => {
    const [currentNumberToFind, setCurrentNumberToFind] = useState<number>(0);
    const [shuffledNumbersToShowOnCards, setShuffledNumbersToShowOnCards] =
        useState<number[]>([]);

    const [chunkedArray, setChunkedArray] = useState<number[][]>([]);
    const [cardsBackgroundColors, setCardsBackgroundColors] = useState<
        string[]
    >([]);
    const [answerCorrect, setAnswerCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState<boolean>(false);

    useEffect(() => {
        setShuffledNumbersToShowOnCards(() =>
            shuffleArray(numbersToShowOnCards).slice(0, 9)
        );

        setCardsBackgroundColors(
            Array.from({ length: 9 }, () => getRandomLightColor())
        );

        setShuffledNumbersToShowOnCards((prevNumbers) =>
            addCurrentAnswerToArray(prevNumbers, currentNumberToFind)
        );
    }, [currentNumberToFind]);

    useEffect(() => {
        setChunkedArray(
            chunkArrayToSmallerParts(shuffledNumbersToShowOnCards, 3)
        );
    }, [shuffledNumbersToShowOnCards]);

    const handleCardClick = (card: number): void => {
        if (currentNumberToFind + 1 === card) {
            setAnswerCorrect(true);
            setTimeout(() => {
                setCurrentNumberToFind((prevNumber) => prevNumber + 1);
                setAnswerCorrect(null);
                setCurrentNumberToFind((prevNumber) => {
                    return prevNumber + 1;
                });
            }, 500);
        } else {
            setAnswerCorrect(false);
            setTimeout(() => {
                setAnswerCorrect(null);
            }, 500);
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col className="card" style={{ backgroundColor: "gray" }}>
                        <p className="card__text">
                            {numbersToFindInWords[currentNumberToFind]}
                        </p>
                    </Col>
                </Row>
                <CardComponents
                    chunkedArray={chunkedArray}
                    cardsBackgroundColors={cardsBackgroundColors}
                    shuffledNumbersToShowOnCards={shuffledNumbersToShowOnCards}
                    handleCardClick={handleCardClick}
                />
            </Container>
            <FeedbackMessageComponent isCorrect={answerCorrect} />
        </>
    );
};

export default FindNumbersGame;
