import React from 'react';
import GradeTable from './grades-table';

function Header(props) {
  return <h1>Student Grade Table</h1>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => this.setState({ grades }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <Header/>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }
}

export default App;
