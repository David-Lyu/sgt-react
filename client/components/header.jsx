import React from 'react';

export default function Header(props) {
  return (
    <header className=" row align-items-end">
      <h1 className="col-8">Student Grade Table</h1>
      <h3 className="col-4">Average Grades: <span className="badge badge-secondary">{props.average}</span></h3>
    </header>
  );
}
