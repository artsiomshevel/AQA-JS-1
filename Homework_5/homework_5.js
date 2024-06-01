// Task 1

// 1. Создайте цикл, который выведет в консоль цифры от 10 до 0

let i = 10
while (i >= 0) {
    console.log(i)
    i--
}

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)

let symbol = ':)'
let i = 5
for (i = 0; i < 5; i++) {
    console.log(symbol)
    symbol = symbol + ':)'
}

//   Для Оксаны и ее друзей: также реализовать циклом while
//   Рекоммендация: попробуйте метод .repeat()
let symbol = ':)'
let i = 1
while (i <= 5) {
    console.log(symbol.repeat(i))
    i++
}
// Task 2

// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

// let bytesValue = 1_454_548
// let kbInbytes = (bytesValue/1024).toFixed(1)
// let mbInbytes = (bytesValue/1024/1024).toFixed(1)
// let gbInbytes = (bytesValue/1024/1024/1024).toFixed(1)
// let tbInbytes = (bytesValue/1024/1024/1024/1024).toFixed(1)

let bytesValue = 111111_454_548
if (bytesValue < 1042) {
    console.log(bytesValue.toFixed(1) + 'Bytes')
} else {
    let counter = 0
    while (bytesValue >= 1024) {
        bytesValue = bytesValue / 1024
        counter++
    }
    if (counter === 1) {
        console.log((bytesValue).toFixed(1) + 'kb')
    } else if (counter === 2) {
        console.log((bytesValue).toFixed(1) + 'Mb')
    } else if (counter === 3) {
        console.log((bytesValue).toFixed(1) + 'Gb')
    } else if (counter === 4) {
        console.log((bytesValue).toFixed(1) + 'Tb')
    }
}

  

// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб
//треугольник
let rowsNumber = 5
for (let i = 0; i < rowsNumber; i++) {
    let row = ''
    //loop for " "
    for (let j = 0; j < rowsNumber - i - 1; j++) {
        row += ' '
    }
    //loop for *
    for (let k = 0; k < (2*i + 1); k++) {
        row += '*'
    }
    console.log(row)
}

//ромб ???


// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`число ${i} делится без остатка на 3 и на 5 `)
    } else if(i % 3 === 0) {
        console.log(`число ${i} делится без остатка на 3`)
    } else if (i % 5 === 0) {
        console.log(`число ${i} делится без остатка на 5`)
    } else {
        console.log(i)
    } 
}
// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

let sentense = 'I am super engineer'
let str = sentense[0].toLowerCase() + sentense.slice(1 , sentense.length)
console.log(str)
let arr = str.split(' ')
console.log(arr)
let newArr = []
newArr.push(arr[0])
for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i].slice(0,1).toUpperCase()+arr[i].slice(1))
}
console.log(newArr.join(''))
