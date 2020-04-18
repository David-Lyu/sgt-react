import React from 'react';
import Header from './header';
import GradeTable from './grades-table';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    this.setState({ avgGrades });
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades });
        this.getAverageGrades();
      })
      .catch(err => console.error(err));

  }

  render() {
    return (
      <>
        <Header average={this.state.avgGrades}/>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }
}

export default App;
