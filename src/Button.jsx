import React, { Component } from 'react';

export class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }
    this.toggleComplete = this.toggleComplete.bind(this);
  }

//Changing states of like button
  toggleComplete() {
    this.setState(prevState => ({
      complete: !prevState.complete
    }));
  }

render() {
  const incompleteIcon = <span class="far fa-heart"></span>;
  const completeIcon = <span class="fas fa-heart"></span>;
  return (
    <div className="todo-item" onClick={this.toggleComplete}>
      {this.state.complete ? completeIcon : incompleteIcon}
      <span className="todo-item-text">{this.props.item}</span>
    </div>
  )
}
}
