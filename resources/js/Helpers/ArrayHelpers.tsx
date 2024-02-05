export function shuffleArray(arrayToShuffle: number[]): number[] {
    const shuffleArray = [...arrayToShuffle];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
    }
    return shuffleArray;
}

export function chunkArrayToSmallerParts(
    arrayToSplitToChunks: number[],
    howManyValuesInChunk: number
): number[][] {
    return Array.from(
        {
            length: Math.ceil(
                arrayToSplitToChunks.length / howManyValuesInChunk
            ),
        },
        (_, index) =>
            arrayToSplitToChunks.slice(
                index * howManyValuesInChunk,
                (index + 1) * howManyValuesInChunk
            )
    );
}

export function addCurrentAnswerToArray(
    valuesInArray: number[],
    valueToFindInArray: number
): number[] {
    const numberExistsInArray = valuesInArray.includes(valueToFindInArray + 1);

    if (!numberExistsInArray) {
        const randomIndex = Math.floor(
            Math.random() * valuesInArray.length - 1
        );
        valuesInArray[randomIndex] = valueToFindInArray + 1;
    }
    return valuesInArray;
}
