import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
         <tr key={post.id}>
           <td>{post.id}</td>
           <td>{post.title}</td>
           <td>{post.quickDescription}</td>
           <td><Moment format="YYYY-MM-DD HH:mm">{post.updated_at}</Moment></td>
           <td><Link className="postShow" style={{ textDecoration: 'none' }} to={`/posts/${post.id}`}>Edit Post</Link></td>
         </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <Link className="btn btn-2" style={{ textDecoration: 'none' }} to="/posts/new">Add a Post</Link><br />
        <Link className="btn btn-2" style={{ textDecoration: 'none' }} to="/messages">Contact Requests</Link><br />
        <h3 className="postTitle">Recent Posts</h3>
          <table className="table table-action">
           <thead>
             <tr>
               <th className="t-small">ID</th>
               <th className="t-small"><b>Title</b></th>
               <th className="t-medium">Description</th>
               <th className="t-small">Last Updated</th>
               <th className="t-small">Show More</th>
             </tr>
           </thead>
           <tbody>
             {this.renderPosts()}
           </tbody>
         </table>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
