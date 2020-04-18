import React from 'react';
import Header from './header';
import GradeTable from './grades-table';
import GradesForm from './grades-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.postGrade = this.postGrade.bind(this);
    this.getAverageGrades = this.getAverageGrades.bind(this);
    this.state = {
      grades: [],
      avgGrades: null
    };
  }

  getAverageGrades() {
    let sumGrades = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      sumGrades += parseInt(this.state.grades[i].grade);
    }
    const avgGrades = sumGrades / this.state.grades.length;
    return avgGrades || 'N/A';
  }

  postGrade(formData) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
    fetch('/api/grades', req)
      .then(res => res.json())
      .then(newGrade => {
        const newGradesArray = this.state.grades.concat(newGrade);
        this.setState({ grades: newGradesArray });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades });
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <>
        <Header average={this.getAverageGrades()}/>
        <GradeTable grades={this.state.grades}/>
        <GradesForm postGrade={this.postGrade}/>
      </>
    );
  }
}

export default App;
