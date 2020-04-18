import React from 'react';

export default class GradesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCourseChange(e) {
    this.setState({ course: e.target.value });
  }

  handleGradeChange(e) {
    this.setState({ grade: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.postGrade(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
