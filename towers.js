const input = document.getElementById("field");
const answer = document.getElementById("message");

const resultTowers = [];

input.addEventListener("blur", function newTower() {
    const inputValue = input.value.toLowerCase().trim();
    if (resultTowers.length === 0) {
        resultTowers.push(inputValue)
        alert(`Введите город на букву ${resultTowers[resultTowers.length - 1].slice(-1)}`);
        input.value = "";
    }
    else {
        console.log(resultTowers)
        if (resultTowers[resultTowers.length - 1].slice(-1) !== inputValue[0]) {
            alert(`Первая буква вашего города не соответствует последней букве города ${resultTowers[resultTowers.length - 1]}`);
            input.value = "";
        } else if (resultTowers.includes(inputValue)) {
            alert(`Город ${inputValue} ухе называли!`)
            input.value = "";
        } else {
            resultTowers.push(inputValue);
            alert(`Добавлен город ${resultTowers[resultTowers.length - 1]}, введите название города на букву ${resultTowers[resultTowers.length - 1].slice(-1)}`);
            input.value = "";
        }
    }
})