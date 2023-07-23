// const, let...

// Объявляем переменные

const min = 0; 
const max = 100;
const attCount = 10;

// Создаём функцию, где спрашиваем у пользователя его имя
// и возвращаем значение

function getUserName() {
    const userName = prompt('Привет, как тебя зовут друг?');
    return userName;
}

// Создаём переменную, которой присваиваем функцию,
// которая возвращает значение, а именно имя пользователя 

const userName = getUserName();

// Создаём константу ей присваиваем стрелочную функцию
// с параметром maxLimit, 
// в которой выбирается рандомное число от 0 до 100
// Создаём переменную randomNumber, которой присваиваем
// результат стрелочной функции с аргументом max = 100

const getRandomNumber = maxLimit => Math.round (Math.random() * maxLimit);
const randomNumber = getRandomNumber(max);

// Циклы - for, while, do while, forIn, forOf

// Параметры - планируемые данные (вводятся сразу при объявл функции)
// Аргументы - конкретные значения

// Создали константу playGame ей присваиваем стрелочную функцию, далее ей
// присвоили параметры планируемых значений, а с помощью alert и шаблонных строк 
// выводим результат пользователю, вызовом функции playGame с аргументами

const playGame = (minLimit, maxLimit, attsNumber, number, name) => {
    alert(`Привет, ${name}!
    Я загадал число больше, чем ${minLimit}, и меньше, чем ${maxLimit}.
    У тебя ${attsNumber} попыток отгадать его. Удачи, бро!`)
    for (let i = 1; i <= attCount; i++) {
        const answer = prompt(`Что скажешь?`)
        if (answer === null) {
            break
        }
        else if(!Number(answer)) {
            alert(`Введите цифру!!!`)
        }
        else if(answer > number) {
            alert(`Число, которое я загадал - меньше.
            У тебя осталось ${attsNumber - i} попыток.`)
        } else if(answer < number) {
            alert(`Число, которое я загадал - больше.
            У тебя осталось ${attsNumber - i} попыток.`)
        } else {
            alert(`${name}, ты молодец, отгодал с ${i} попытки`)
            return
        }
        
    }
    alert(`${name}, GAME OVER `)
}

playGame(min, max, attCount, randomNumber, userName)