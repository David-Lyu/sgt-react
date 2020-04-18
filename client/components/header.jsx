import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>Student Grade Table</h1>
      <h3>Average Grades: <span className="badge badge-secondary">{props.average}</span></h3>
    </header>
  );
}
