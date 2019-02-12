import React, { Component} from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import _ from 'lodash';

class Messages extends Component {

  componentDidMount() {
    this.props.fetchMessages();
  }

  loadMessages() {
    return _.map(this.props.messages, message => {
      return (
         <tr key={message.message + message.firstName}>
           <td>{message.firstName}</td>
           <td>{message.lastName}</td>
           <td>{message.email}</td>
           <td>{message.message}</td>
         </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <h3 className="postTitle">Recent Messages</h3>
          <table className="table table-action">
           <thead>
             <tr>
               <th className="t-small">First Name</th>
               <th className="t-small">Last Name</th>
               <th className="t-small">Email</th>
               <th className="t-small">Message</th>
             </tr>
           </thead>
           <tbody>
             {this.loadMessages()}
           </tbody>
         </table>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log(state)
  return { messages: state.posts };
}

export default connect(mapStateToProps, { fetchMessages })(Messages);
