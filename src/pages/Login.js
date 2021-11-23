import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { logPage } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      enableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;

    this.setState({
      [name]: value,
    }, this.validateInput());
  }

  handleClick(event) {
    event.preventDefault();
    const { history, getEmail } = this.props;
    history.push('/carteira');
    const { email } = this.state;
    getEmail(email);
  }

  // Referência 'reg' url:https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  validateInput() {
    const { password, email } = this.state;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passwordLength = password.length;
    const minimalCharacter = 5;
    if (passwordLength >= minimalCharacter && reg.test(email)) {
      this.setState({
        enableButton: false,
      });
    } else {
      this.setState({
        enableButton: true,
      });
    }
  }

  render() {
    const { email, password, enableButton } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="email"
            id="email-input"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            data-testid="password-input"
            type="password"
            id="password-input"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ enableButton }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (state) => dispatch(logPage(state)),
});

export default connect(null, mapDispatchToProps)(Login);
