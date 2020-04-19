import React from 'react';

export default class GradesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleGradeChange = this.handleGradeChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
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
    this.clearForm();
  }

  clearForm() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="col-4">
        <label className="form-group row input-group-prepend">
          <i className="fas fa-user input-group-text"></i>
          <input onChange={this.handleNameChange}
            value={this.state.name} type="text"
            className="col-9"placeholder="Name"/>
        </label>
        <label className="form-group row input-group-prepend">
          <i className="far fa-list-alt input-group-text"></i>
          <input onChange={this.handleCourseChange}
            value={this.state.course} className="col-9"
            placeholder="Course" type="text"/>
        </label>
        <label className="form-group row input-group-prepend">
          <i className="fas fa-graduation-cap input-group-text"></i>
          <input onChange={this.handleGradeChange}
            value={this.state.grade} className="col-9"
            placeholder="Grade" type="number"/>
        </label>
        <div className="form-group row">
          <button className="btn btn-success btn-sm">
            Add
          </button>
          <button type="reset" onClick={this.clearForm}
            className="btn btn-outline-dark btn-sm offset-1">
              Cancel
          </button>
        </div>
      </form>
    );
  }
}
