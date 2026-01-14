const input = document.getElementById("field");
const answer = document.getElementById("message");
const resultTowers = [];

function getValidLetterForNextTurn(word) {
    const lastLetter = word.slice(-1);

    if (lastLetter === "ъ" || lastLetter === "ь") {
        return word.length > 1 ? word.slice(-2, -1) : lastLetter;
    }
    return lastLetter;
}

input.addEventListener("blur", function newTower() {
    const inputValue = input.value.toLowerCase().trim();

    if (!inputValue) {
        return;
    }

    if (resultTowers.length === 0) {
        resultTowers.push(inputValue);
        const validLetter = getValidLetterForNextTurn(inputValue);
        alert(`Введите город на букву "${validLetter}"`);
        input.value = "";
    } else {
        const lastCity = resultTowers[resultTowers.length - 1];

        const requiredLetter = getValidLetterForNextTurn(lastCity);

        const firstLetter = inputValue[0];

        console.log(`Последний город: ${lastCity}`);
        console.log(`Требуемая буква: ${requiredLetter}, введенная: ${firstLetter}`);

        if (requiredLetter !== firstLetter) {
            alert(`Город должен начинаться на букву "${requiredLetter}" (последняя буква города ${lastCity}), а вы ввели "${inputValue}"`);
            input.value = "";
        } else if (resultTowers.includes(inputValue)) {
            alert(`Город ${inputValue} уже называли!`);
            input.value = "";
        } else {
            resultTowers.push(inputValue);

            const nextRequiredLetter = getValidLetterForNextTurn(inputValue);

            alert(`Добавлен город ${inputValue}. Введите город на букву "${nextRequiredLetter}"`);
            input.value = "";
        }
    }
});