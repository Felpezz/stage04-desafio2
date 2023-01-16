
let requiredAvarage = 7
let finalAvarage

const students = [
  {
    name: "Julia",
    firstTest: 6,
    secondTest: 10
  },
  {
    name: "Lucas",
    firstTest: 8,
    secondTest: 7
  },
  {
    name: "Camila",
    firstTest: 8,
    secondTest: 6
  },
  {
    name: "Ronaldo",
    firstTest: 3,
    secondTest: 5
  }
]

function avarage(firstTest,secondTest) {
   finalAvarage = (firstTest + secondTest) / 2 
   return finalAvarage
}

function yesNot() {
  if (finalAvarage < requiredAvarage) {
    return `Este Aluno(a) não passou!`
  } else {
    return `Este aluno(a) passou!`
  } 
}

function printAvarages(student) {
  return `Aluno(a) ${student.name} possui a média de
  ${avarage(student.firstTest, student.secondTest)}
  ${yesNot()}
  `
}

for(let student of students) {
  let printAvarage = printAvarages(student)
  let printYesNot = yesNot()
  alert(printAvarage, printYesNot)
}

