import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    title: 'Hypertext Markup Language',
    detail: 'Hypertext Markup Language (html) is the standard' +
      ' markup language for creating web pages and web applications.' +
      ' With cascading Style Sheets (CSS) and JavaScript, it forms a triad' +
      ' of cornerstone technologies for the World Wide Web'
  },
  {
    title: 'Cascading Style Sheets',
    detail: 'Cascading Style Sheets (CSS) is a style sheet language' +
      ' used for describing the presentation of a document written in a markup' +
      ' language like HTML. CSS is a cornerstone technology of the World Wide' +
      ' Web. Alongside HTML and JavaScript'
  },
  {
    title: 'JavaScript',
    detail: 'JavaScript, often abbreviated as JS, is a high-level, interpreted' +
      ' programming language that conforms to the ECMAScript specification. JavaScript' +
      ' has curly-bracket syntax, dynamic typing. prototype-based object-orientation' +
      ' and first-class functions.'
  }
];

ReactDOM.render(<Accordion topics={topics} />, document.getElementById('root'));
