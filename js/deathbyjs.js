//STEP 1
// function alphaOrder() {
//     let text = prompt('Please enter some text')
//     let split = text.split('')
//     const result = split.sort().join('')
//     console.log(`Original text: "${text}"`)
//     console.log(`"${text}" in alphabetical order: ${result}`)
// }

// alphaOrder()

//STEP 2
// function titleCase() {
//     let text = prompt('Please enter some text')
//     const textArr = text.split(' ')

//     for (i = 0; i < textArr.length; i++) {
//         textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1)
//     }

//     const newString = textArr.join(' ')
//     console.log(newString)
// }

// titleCase()

//STEP 3
// function vowelCount() {
//     let text = prompt('Please enter some text')
//     let vowelsCount = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of text) {
//         if (vowels.includes(char)) {
//             vowelsCount++
//         }
//     }

//     console.log(text)
//     console.log(`Number of vowels: ${vowelsCount}`)
// }

// vowelCount()

//STEP 4
// function generateId(length) {
//     let text = ''
//     let charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

//     for (i = 0; i < length; i++) {
//         text += charList.charAt(Math.floor(Math.random() * charList.length))
//     }

//     return text
// }

// console.log(generateId(8))


//STEP 5
// function longestName(countryName) {
//     return countryName.reduce(function (lname, country) {
//         return lname.length > country.length ? lname : country
//     }, "")
// }

// let text = prompt('Please enter country names, seperated by commas')
// let countries = text.split(', ')
// console.log(longestName(countries))

