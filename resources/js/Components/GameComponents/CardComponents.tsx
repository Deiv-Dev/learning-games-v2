import React from "react";
import { Row, Col } from "react-bootstrap";

interface CardComponentsProps {
    chunkedArray: number[][];
    cardsBackgroundColors: string[];
    shuffledNumbersToShowOnCards: number[];
    handleCardClick: (card: number) => void;
}

const CardComponents = ({
    chunkedArray,
    cardsBackgroundColors,
    shuffledNumbersToShowOnCards,
    handleCardClick,
}: CardComponentsProps) => {
    return (
        <>
            {chunkedArray.map((row: number[], rowIndex: number) => (
                <Row key={`row-${row}`}>
                    {row.map((card: number, colIndex: number) => (
                        <Col
                            style={{
                                backgroundColor:
                                    cardsBackgroundColors[
                                        Math.floor(
                                            Math.random() *
                                                shuffledNumbersToShowOnCards.length
                                        )
                                    ],
                            }}
                            className="card"
                            key={`col-${row}-${card}`}
                            onClick={() => handleCardClick(card)}
                        >
                            <p className="card__text">{card}</p>
                        </Col>
                    ))}
                </Row>
            ))}
        </>
    );
};

export default CardComponents;
