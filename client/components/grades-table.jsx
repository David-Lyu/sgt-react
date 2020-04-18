import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td scope="row">{grade.name}</td>
      <td scope="row">{grade.course}</td>
      <td scope="row">{grade.grade}</td>
      <td scope="row">
        <button className="btn btn-danger btn-sm"onClick={() => props.gradeDelete(grade.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default function GradeTable(props) {
  const grades = props.grades;
  const gradeDelete = props.gradeDelete;
  const gradesArray = grades.length > 0 ? grades.map(grade => {
    return <Grade key={grade.id} grade={grade} gradeDelete={gradeDelete}/>;
  }) : <tr><td>{'No grades Render'}</td></tr>;
  return (
    <table className="table table-striped col-8">
      <thead className="">
        <tr>
          <th scope="col">Students Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {gradesArray}
      </tbody>
    </table>
  );
}
