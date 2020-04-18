import React from 'react';

export default class GradesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  handleNameChange() {
    console.log('name');
  }

  handleCourseChange() {
    console.log('course');
  }

  handleGradeChange() {
    console.log('grade');
  }

  render() {
    return (
      <form onSubmit={this.props.postGrade(this.state)}>
        <label>
          <i className="fas fa-user"></i>
          <input onChange={this.handleNameChange} value={this.state.name} type="text" placeholder="Name"/>
        </label>
        <label>
          <i className="far fa-list-alt"></i>
          <input onChange={this.handleCourseChange} value={this.state.course} placeholder="Course" type="text"/>
        </label>
        <label>
          <i className="fas fa-graduation-cap"></i>
          <input onChange={this.handleGradeChange} value={this.state.grade} placeholder="Grade" type="number"/>
        </label>
        <div>
          <button>Add</button>
          <button type="reset" onClick={e => e.target.reset}>Cancel</button>
        </div>
      </form>
    );
  }
}
