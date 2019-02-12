
import React, { Component } from 'react';
import requireAuth from './requireAuth';
import PostsIndex from './posts_index';


class Feature extends Component {
  render() {
    return <div>
              <PostsIndex />
            </div>;
  }
}

export default requireAuth(Feature);
