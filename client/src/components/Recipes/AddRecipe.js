import React from "react";
import { renderGraphiQL } from "apollo-server-module-graphiql";

class AddRecipe extends React.Component {
  state={
    name: '',
    instrucions: '',
    category: 'Breakfast',
    description: '',
    username: ''
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }

  render() {
    const {name, category, description, instructions} = this.state;
    return (
      <div className="App">
        <h2 className="App">Add Recipe</h2>
        <form className="form">
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            onChange={this.handleChange}
            value={name}
          />
          <select name="category" onChange={this.handleChange} value={category}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            placeholder="Add description"
            value={description}
          />
          <textarea
            name="instructions"
            placeholder="Add instructions"
            onChange={this.handleChange}
            value={instructions}
          />
          <button classname="button-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
