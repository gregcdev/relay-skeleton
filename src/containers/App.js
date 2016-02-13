import React, {Component} from 'react';
import Relay from 'react-relay'

class App extends Component {
  render() {
    const { user } = this.props
    if (!user) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div>
          <h3>User</h3>
          <ul>
            <li>id: {user.id}</li>
            <li>email: {user.email}</li>
          </ul>
        </div>
      )
    }
  }
}

export default Relay.createContainer(App, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        id,
        email,
      }
    `
  }
});
