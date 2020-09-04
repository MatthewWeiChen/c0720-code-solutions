/* eslint-disable no-console */
const book = [
  {
    isbn: '0001',
    title: 'Ready Player one',
    author: 'Ernest Cline'
  },
  {
    isbn: '0002',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: '0003',
    title: 'You don\'t know JS',
    author: 'Kyle Simspon'
  }
];

console.log('type of book:', typeof JSON.stringify(book), JSON.stringify(book));

const student = '{"number id": 111, "name": "James Park"}';
console.log('type of student:', typeof JSON.parse(student), JSON.parse(student));
