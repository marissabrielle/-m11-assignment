//STEP 1
// let userMonth = prompt('Enter a month')
// let userYear = prompt('Enter a year')

// const days = function (userMonth, userYear) {
//     return new Date(userYear, userMonth, 0).getDate()
// }

// console.log(`Days in month:  ${days(userMonth, userYear)}`)

//STEP 2
// let userDate = new Date(prompt('Enter a date ie: (yyyy-mm-dd)'))

// const month = userDate.toLocaleString('default', { month: 'long' })
// console.log(month)

//STEP 3
// let userDate = new Date(prompt('Enter a date ie: (yyyy-mm-dd)'))

// const dayOfWeek = userDate.getDay()

// if (dayOfWeek == 6 || dayOfWeek == 0) {
//     console.log(`${userDate.toDateString()} is the weekend`)
// }
// else {
//     console.log(`${userDate.toDateString()} is the not the weekend`)
// }

//STEP 4
// let yesterday = new Date()
// yesterday.setDate(yesterday.getDate() - 1)
// console.log(yesterday.toDateString())

//STEP 5
// let today = new Date()
// let text = today.toString()
// console.log(text.slice(0, 1))