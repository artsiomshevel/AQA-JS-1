// Task 1
// 1. Создать переменную “age” и присвоить ей значение 10
let age = 10
//   2. Создать переменную “age_2” и присвоить ей значение 18
const age_2 = 18
//   3. Создать переменную “age_3” и присвоить ей значение 60
const age_3 = 60
//   4. Создать if в котором будЕте проверять значение переменной age_1
//     Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then ”
//     Если “age” >=  age_2 и “age” <  age_3, вывести в консоль “Welcome  !”
//     Если “age”  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//     Иначе выводите “Technical work”.
if (age < age_2) {
    console.log("You don't have access cause your age is "  + age + " It's less then " + age_2)
} else if ((age >= age_2) && (age < age_3)) {
    console.log("Welcome  !")
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}

// Task 2 
// 1. Реализовать Task 1 через switch

switch (true) {
  case age < age_2:
    console.log("You don't have access cause your age is "  + age + " It's less then " + age_2)
    break
  case age >= age_2 && age < age_3:
    console.log("Welcome  !")
    break
  case age > age_3:
    console.log("Keep calm and look Culture channel")
    break
  default:
    console.log("Technical work")
}
// 2. Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
if (typeof(age) !== 'number') {
    console.log('Enter correct value')
} else {
  if (age < age_2) {
    console.log("You don't have access cause your age is "  + age + " It's less then " + age_2)
  } else if ((age >= age_2) && (age < age_3)) {
    console.log("Welcome  !")
  } else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
  } else {
    console.log("Technical work")
}
}
// 3.Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number
if (isNaN(age)) {
    console.log('You have entered Not a Number!!')
} else { age = Number(age)
    switch (true) {
        case age < age_2:
          console.log("You don't have access cause your age is "  + age + " It's less then " + age_2)
          break
        case age >= age_2 && age < age_3:
          console.log("Welcome  !")
          break
        case age > age_3:
          console.log("Keep calm and look Culture channel")
          break
        default:
          console.log("Technical work")
      }
}
