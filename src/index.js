import sortBy from 'lodash/sortBy'
import './styles/index.styl'

let users = [
  { 'user': 'patrick', 'age': 27 },
  { 'user': 'jesse', 'age': 30 },
  { 'user': 'adam', 'age': 31 },
  { 'user': 'rj', 'age': 29 }
]
 
let ordered = sortBy(users, [(u) => u.user])
console.table(ordered)