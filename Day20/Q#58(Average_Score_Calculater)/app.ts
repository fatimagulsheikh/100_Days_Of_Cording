/* **Question 58:** Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/

// Average Score Calculater:

function AverageScore(...Scores: number[]): number {
    let total = Scores.reduce((sum, Score) => sum + Score, 0);
    return total / Scores.length;
}
console.log(AverageScore(80, 90, 100, 70));