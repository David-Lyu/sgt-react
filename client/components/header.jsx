import React from 'react';

export default function Header(props) {
  return (
    <header className="d-flex justify-content-between align-items-end flex-fill">
      <h1>Student Grade Table</h1>
      <h3>Average Grades: <span className="badge badge-secondary">{props.average}</span></h3>
    </header>
  );
}
