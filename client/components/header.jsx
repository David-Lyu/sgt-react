import React from 'react';

export default function Header(props) {
  return (
    <>
      <h1>Student Grade Table</h1>
      <h3>Average Grades: <span className="badge badge-secondary">{props.average}</span></h3>
    </>
  );
}
