// Task_1
// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null

function getEmployeeInfo(name) {
    let employeeNames = ['Artsiom', 'Nikolai', 'Antanina', 'Dani', 'Antony']
    let employeeSalary = [2000, 3000, 4000, 5000, 6000]
    let result = []

    for (let i = 0; i < employeeNames.length; i++) {
      
        if (name === employeeNames[i]) {
            return [employeeNames[i], employeeSalary[i]]
        }
    }

    return null
}

getEmployeeInfo('Dani')
console.log(getEmployeeInfo('Dani'))




// Task_2
// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

function getUniquePizzaName(name) {
    const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
    const result = []
    const competitorPizzas1 =[]

    for (let i = 0; i < competitorPizzas.length; i++) {

        competitorPizzas1.push(competitorPizzas[i].toLowerCase());
    }

    for (let i = 0; i < name.length; i++) {
        
        if (!competitorPizzas.includes(name[i])) {
            result.push(name[i])
        }

    }

    return result.length === 0 ? null : result
}

console.log(getUniquePizzaName(['peperoni', 'Diablo', '4 cheeses', 'hawai', '111', '4 444',]))

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function getWordWithMaxCharacters(sentense) {
    const arr = sentense.split(' ')
    let counter = 0
    let newArr = []

    for (i = 0; i < arr.length; i++) {

        if (arr[i].length > counter) {
            counter = arr[i].length
        }

    }

    for(let i = 0; i < arr.length; i++){

        if (arr[i].length === counter) {
            newArr.push(arr[i])
        }

    }

    console.log(newArr.join(' '))
}

getWordWithMaxCharacters('and home and')

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function deleteDuplicates(array) {
    let result = []

    for (let str of array) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }


// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkIfWordIsPalindrome(word) {
    
    if (typeof word !== 'string') {
        console.log('Input is not a string')
    } else if (word === word.split('').reverse().join('')) {
        console.log('Palindrome')
    } else {
        console.log('No')
    }
}
console.log(checkIfWordIsPalindrome(123))  //do not understand why 'undefined' is displayed in output after console.log