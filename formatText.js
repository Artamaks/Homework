const path = require('path')
const fsPromises = require('fs').promises

const readFile = async (inputFile) => {
  const filePath = path.join(__dirname, 'data', inputFile)
  const data = await fsPromises.readFile(filePath, 'utf-8')
  const formattedData = data.replaceAll(' ', '')
  console.log(formattedData)
  const symbolsArr = formattedData.split('')

  const onlyNums = symbolsArr.filter(symbol => Number.isInteger(Number(symbol)) 
  )
  const newArr = onlyNums.join()
  console.log(newArr)
  console.log(onlyNums)
  const myNums = newArr;
  let sum = 0;
  onlyNums.forEach( num => {
    sum += Number(num);
  })
  console.log(sum) 
}


  
readFile('file1.txt')
readFile('file2.txt')
readFile('file3.txt')
