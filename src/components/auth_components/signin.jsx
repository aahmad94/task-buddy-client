import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className='session-form'>
        <h1>Sign in to your workplace</h1>
        <form>
          <p>Enter your <strong>email address</strong> and <strong>password</strong></p>

          <input
            type='text'
            placeholder='name@example.com'
            value={this.state.email}
            onChange={this.handleInput('email')}
          /><br />

          <input
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleInput('password')}
          /><br />

          <button onClick={this.handleSubmit}>Continue <strong>&#x2192;</strong></button>
        </form>
      </div>
    );
  }
}

export default Signin;
