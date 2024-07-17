
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
let abagaras = {
  nome : 'Rebeca Caetano dos Santos',
  email: 'rcs43@aluno.ifal.edu.br',
  telefone : "(82)99994-5536",
  endereco : "Cunjunto Demorisvaldo QL N°17 rua11, Mata do Rolo, Rio Largo(AL)"
} 

app.get('/bjj', (req, res) => {
  res.send(abagaras)
})

// app.post('/bjj', (req, res) => {
//     res.send('Hello Earth!')
//   })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
