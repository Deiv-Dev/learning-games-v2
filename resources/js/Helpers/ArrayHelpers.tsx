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
    howManyChunks: number
): number[][] {
    return Array.from(
        { length: Math.ceil(arrayToSplitToChunks.length / howManyChunks) },
        (_, index) =>
            arrayToSplitToChunks.slice(
                index * howManyChunks,
                (index + 1) * howManyChunks
            )
    );
}

export function addCurrentAnswerToArray(
    valuesInArray: number[],
    valueToFindInArray: number
): number[] {
    const numberExistsInArray = valuesInArray.includes(valueToFindInArray + 1);

    if (!numberExistsInArray) {
        const randomIndex = Math.floor(Math.random() * 9);
        valuesInArray[randomIndex] = valueToFindInArray + 1;
    }
    return valuesInArray;
}
