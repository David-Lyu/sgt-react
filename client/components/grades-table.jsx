import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td>
        <button onClick={() => props.gradeDelete(grade.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default function GradeTable(props) {
  const grades = props.grades;
  const gradeDelete = props.gradeDelete;
  const gradesArray = grades ? grades.map(grade => {
    return <Grade key={grade.id} grade={grade} gradeDelete={gradeDelete}/>;
  }) : <tr><td>{'No grades Render'}</td></tr>;
  return (
    <table className="table flex-fill">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Students Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {gradesArray}
      </tbody>
    </table>
  );
}
