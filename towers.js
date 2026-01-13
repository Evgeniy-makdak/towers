const input = document.getElementById("field");
const answer = document.getElementById("message");

const resultTowers = [];

input.addEventListener("blur", function newTower() {
    if (!resultTowers) {
        resultTowers.push(input.value)
    } 
    if (resultTowers.length > 0) {
        if (resultTowers[resultTowers.length - 1].slice(-1) !== input.value[0]) {
            alert(`Первая буква вашего города не соответствует последней букве города ${resultTowers[resultTowers.length - 1]}`);
            input.textContent = "";
        }
    } else {
        resultTowers.push(input.value);
        alert(`Добавлен город ${resultTowers[resultTowers.length - 1]}, введите название города на букву ${resultTowers[resultTowers.length - 1].slice(-1)}`);
    }
})