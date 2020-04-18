import React from 'react';
import Header from './header';
import GradeTable from './grades-table';

class App extends React.Component {
  constructor(props) {
    super(props);
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
      </>
    );
  }
}

export default App;
