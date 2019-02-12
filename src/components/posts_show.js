import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPost, deletePost, updatePost } from '../actions';
import { reduxForm } from 'redux-form';
import Modal from 'react-modal';

class PostsShow extends Component {

  constructor(props) {
  super(props);
  this.state = {
    modalIsOpen: false,
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
    photoURL3: ""
  };

  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
}

  openModal() {
  this.setState({modalIsOpen: true});
}

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id).then(data => {
      let updatedData = data.payload.data[0];
      this.setState({
        title: updatedData.title,
        quickDescription: updatedData.quickDescription,
        postDescription: updatedData.postDescription,
        category: updatedData.category,
        recipeOwner: updatedData.recipeOwner,
        ingredients: JSON.stringify(updatedData.ingredients),
        instructions: JSON.stringify(updatedData.instructions),
        prepTime: updatedData.prepTime,
        cookTime: updatedData.cookTime,
        servings: updatedData.servings,
        photoURL1: updatedData.photoURL1,
        photoURL2: updatedData.photoURL2,
        photoURL3: updatedData.photoURL3
      });
    });
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      alert("Your post has been deleted!");
      this.props.history.push('/feature');
    });
  }

  onSubmit() {
    const { id } = this.props.match.params;
    let updatedPost = {
      title: this.state.title,
      quickDescription: this.state.quickDescription,
      postDescription: this.state.postDescription,
      category: this.state.category,
      recipeOwner: this.state.recipeOwner,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      prepTime: this.state.prepTime,
      cookTime: this.state.cookTime,
      servings: this.state.servings,
      photoURL1: this.state.photoURL1,
      photoURL2: this.state.photoURL2,
      photoURL3: this.state.photoURL3
    };
      alert("Submitted!")
      this.props.updatePost(id, updatedPost);
      this.props.history.push('/feature');
    };




  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { handleSubmit, post } = this.props;

    if(!post) {
      return <h1>Loading...</h1>
      }

    return (
      <div>
        <Link to='/feature'><button className="btn btn-2">Back to Posts</button></Link><br />
        <h3 className="postTitle">{post[0].title}</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label>Post Title</label>
            <input
              id="input"
              className="form-control"
              type="text"
              value={ this.state.title}
              onChange={this.handleInputChange.bind(this)}
              name='title'
              />
            <label>Quick Description</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.quickDescription }
              onChange={this.handleInputChange.bind(this)}
              name='description'
              />
              <label>Post Description</label>
              <input
                id="input"
                className="form-control"
                type="textarea"
                value={ this.state.postDescription }
                onChange={this.handleInputChange.bind(this)}
                name='description'
                />
            <label>Post Category</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.category }
              onChange={this.handleInputChange.bind(this)}
              name='category'
              />
            <label>Owner</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.recipeOwner }
              onChange={this.handleInputChange.bind(this)}
              name='recipeOwner'
              />
            <label>Ingredients</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.ingredients.toString()}
              onChange={this.handleInputChange.bind(this)}
              name='ingredients'
              />
            <label>Instructions</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.instructions.toString() }
              onChange={this.handleInputChange.bind(this)}
              name='instructions'
              />
            <label>Prep Time</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.prepTime }
              onChange={this.handleInputChange.bind(this)}
              name='prepTime'
              />
            <label>Cook Time</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.cookTime }
              onChange={this.handleInputChange.bind(this)}
              name='cookTime'
              />
            <label>Servings</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.servings }
              onChange={this.handleInputChange.bind(this)}
              name='servings'
              />
            <label>PhotoURL1</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.photoURL1 }
              onChange={this.handleInputChange.bind(this)}
              name='photoURL1'
              />
            <label>photoURL2</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.photoURL2 }
              onChange={this.handleInputChange.bind(this)}
              name='photoURL2'
              />
            <label>photoURL3</label>
            <input
              id="input"
              className="form-control"
              type="textarea"
              value={ this.state.photoURL3 }
              onChange={this.handleInputChange.bind(this)}
              name='photoURL3'
              />
            <button type="submit" className="btn btn-5">Update Post</button>
        </form>
      <div>
        <div>
          <button onClick={this.openModal} className="btn btn-1">Delete Post</button>
          <Modal
            className="Modal"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
          >
            <button onClick={this.closeModal} id="modalButton" className="btn btn-2">Go Back</button>
            <p className="confirmationText">Are you sure you want to permanently delete this post?</p>
            <div>
              <button
                className="btn btn-1"
                onClick={this.onDeleteClick.bind(this)}
              > Delete Post
            </button><br />
            </div>
          </Modal>
        </div>
      </div>
    </div>
    );
  };
}

function mapStateToProps({ posts }, ownProps, state) {
  return {
    post: posts[0]
   };
}

export default reduxForm({
  form: 'PostsUpdateForm'
})(
  connect(mapStateToProps, { fetchPost, deletePost, updatePost })(PostsShow)
);
