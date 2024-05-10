// Average Score Calculater:
function AverageScore() {
    var Scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Scores[_i] = arguments[_i];
    }
    var total = Scores.reduce(function (sum, Score) { return sum + Score; }, 0);
    return total / Scores.length;
}
console.log(AverageScore(80, 90, 100, 70));
