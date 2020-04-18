import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr scope="">
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
    </tr>
  );
}

export default function GradeTable(props) {
  const grades = props.grades;
  const gradesArray = grades ? grades.map(grade => {
    return <Grade key={grade.id} grade={grade} />;
  }) : <tr><td>{'No grades Render'}</td></tr>;
  return (
    <table className="table flex-fill">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Students Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradesArray}
      </tbody>
    </table>
  );
}
