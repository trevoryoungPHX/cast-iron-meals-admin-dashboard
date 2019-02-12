import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import _ from 'lodash'

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      quickDescription: "",
      postDescription: "",
      category: "",
      recipeOwner: "",
      ingredients: [],
      instructions: [],
      prepTime: "",
      cookTime: "",
      servings: "",
      photoURL1: "",
      photoURL2: "",
      photoURL3: "",
      name: "",
      amount: "",
      measurement: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit() {
    let createPost = {
      title: this.state.title,
      quickDescription: this.state.quickDescription,
      postDescription: this.state.postDescription,
      category: this.state.category,
      recipeOwner: this.state.recipeOwner,
      ingredients: JSON.stringify(this.state.ingredients),
      instructions: this.state.instructions,
      prepTime: this.state.prepTime,
      cookTime: this.state.cookTime,
      servings: this.state.servings,
      photoURL1: this.state.photoURL1,
      photoURL2: this.state.photoURL2,
      photoURL3: this.state.photoURL3
    }
    this.props.createPost(createPost, (callback) => {
      alert("Your post has been created!");
      this.props.history.push('/feature');
    });
  }

  addIngredient(values) {
    let newIngredient = {
      name: this.state.name,
      amount: this.state.amount,
      measurement: this.state.measurement
    }
    let newIngredients = this.state.ingredients
    newIngredients.push(newIngredient)
    this.setState({ingredients: newIngredients, name: '', amount: '', measurement: ''})
    values.preventDefault();
    };

  removeIngredient(e) {
    let currentIngredients = this.state.ingredients
    currentIngredients.pop()
    this.setState({ingredients: currentIngredients, name: '', amount: '', measurement: ''})
    alert("Ingredient deleted!");
    e.preventDefault();
  }

  showCurrentIngredients() {
    return _.map(this.state.ingredients, ingredient => {
      return (
           <div>{ingredient.amount} {ingredient.measurement} {ingredient.name}</div>
      )
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Link to='/feature' style={{ textDecoration: 'none' }}><button className="btn btn-2">Back to Posts</button></Link><br />
        <h3 className="postTitle">New Post</h3>
          <form onSubmit={this.addIngredient.bind(this)}><br></br>
            <div>Ingredients</div>
            {this.showCurrentIngredients()}
            <label>
              Amount
              <input className="new-post-input-type-text" name="amount" type="text" value={this.state.amount} onChange={this.handleInputChange}  />
            </label>
            <label>
              Measurement
              <input className="new-post-input-type-text" name="measurement" type="text" value={this.state.measurement} onChange={this.handleInputChange}  />
            </label>
            <label>
              Name
              <input className="new-post-input-type-text" name="name" type="text" value={this.state.name} onChange={this.handleInputChange}  />
            </label>
            <button type="submit" className="btn btn-5">Add Ingredient</button>
          </form>
          <button onClick={this.removeIngredient.bind(this)} className="btn btn-1">Delete Ingredient</button>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <label>
              Title:
              <input className="new-post-input-type-text" name="title" type="text" value={this.state.title} onChange={this.handleInputChange}  />
            </label>
            <label>
              Quick Description:
              <input className="new-post-input-type-text-area" name="quickDescription" type="text" value={this.state.quickDescription} onChange={this.handleInputChange} />
            </label>
            <label>
              Post Description:
              <input className="new-post-input-type-text-area" name="postDescription" type="text" value={this.state.postDescription} onChange={this.handleInputChange} />
            </label>
            <label>
              Category:
              <select className="new-post-input-type-select" name="category" type="select" value={this.state.category} onChange={this.handleInputChange}>
                <option value="Main Entrée">Main Entrée</option>
                <option value="Appetizers">Appetizers</option>
                <option value="Soups">Soups</option>
                <option value="Salads">Salads</option>
                <option value="Beef">Beef</option>
                <option value="Poultry">Poultry</option>
                <option value="Pork">Pork</option>
                <option value="Seafood">Seafood</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Paleo">Paleo</option>
                <option value="Vegetable Side Dish">Vegetable Side Dish</option>
                <option value="Side dishes: Other">Side dishes: Other</option>
                <option value="Desserts">Desserts</option>
                <option value="Canning / Freezing">Canning / Freezing</option>
                <option value="Sauces">Sauces</option>
                <option value="Breads">Breads</option>
                <option value="Holidays">Holidays</option>
                <option value="Entertaining">Entertaining</option>
                <option value="Pasta">Pasta</option>
              </select>
            </label>
            <label className="small-label">
              Recipe Owner:
              <input className="new-post-input-type-text" name="recipeOwner" type="text" value={this.state.recipeOwner} onChange={this.handleInputChange} />
            </label>
            <label className="small-label">
              Prep Time:
              <input className="new-post-input-type-text" name="prepTime" type="text" value={this.state.prepTime} onChange={this.handleInputChange} />
            </label>
            <label className="small-label">
              Cook Time:
              <input className="new-post-input-type-text" name="cookTime" type="text" value={this.state.cookTime} onChange={this.handleInputChange} />
            </label>
            <label className="small-label">
              Servings:
              <input className="new-post-input-type-text" name="servings" type="text" value={this.state.servings} onChange={this.handleInputChange} />
            </label>
            <label>
              PhotoURL1:
              <input className="new-post-input-type-text" name="photoURL1" type="text" value={this.state.photoURL1} onChange={this.handleInputChange} />
            </label>
            <label>
              PhotoURL2:
              <input className="new-post-input-type-text" name="photoURL2" type="text" value={this.state.photoURL2} onChange={this.handleInputChange} />
            </label>
            <label>
              PhotoURL3:
              <input className="new-post-input-type-text" name="photoURL3" type="text" value={this.state.photoURL3} onChange={this.handleInputChange} />
            </label>
            <button type="submit" className="btn btn-5">Submit</button>
          </form>
        </div>
      );
    }
}

export default reduxForm({
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
