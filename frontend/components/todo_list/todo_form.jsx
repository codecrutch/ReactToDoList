import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: "", body: "", id: "", done: 'done'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let id = uniqueId();
    let todo = this.state;
    this.setState({id: id});
    this.props.receiveTodo(todo);
  }

  handleChange(field) {
    return (e) => {
      let val = e.currentTarget.value;
      this.setState({[field]: val});
    };
  }
  //
  // handleTitleChange(e){
  //   let title = e.currentTarget.value;
  //   this.setState({ title });
  // }
  // handleBodyChange(e){
  //   let body = e.currentTarget.value;
  //   this.setState({body});
  // }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label> Title:
        <input onChange={this.handleChange("title")} value={this.state.title}/>
      </label>
      <br/>
      <label> Body:
        <input onChange={this.handleChange("body")} value={this.state.body}/>
      </label>
      <br/>
      <button>Submit</button>
      </form>
    );
  }
}
export default TodoForm;
