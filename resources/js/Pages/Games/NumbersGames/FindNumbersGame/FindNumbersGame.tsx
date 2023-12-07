import React, { useEffect, useState } from "react";
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
import "./FindNumbersGameStyle.scss";
import { getRandomLightColor } from "@/Helpers/LightColorGeneratorHelper";
import CardComponents from "@/Components/GameComponents/CardComponents";

const FindNumbersGame = () => {
    const [currentNumberToFind, setCurrentNumberToFind] = useState<number>(0);
    const [shuffledNumbersToShowOnCards, setShuffledNumbersToShowOnCards] =
        useState<number[]>([]);

    const [chunkedArray, setChunkedArray] = useState<number[][]>([]);
    const [cardsBackgroundColors, setCardsBackgroundColors] = useState<
        string[]
    >([]);
    const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);
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
            setCurrentNumberToFind((prevNumber) => prevNumber + 1);
        }
    };

    return (
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
    );
};

export default FindNumbersGame;
