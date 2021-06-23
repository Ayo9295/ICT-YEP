const fs = require('fs')

fs.readFile('/Users/backendclass1/Documents/ICT-YEP/week-4/week4.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})