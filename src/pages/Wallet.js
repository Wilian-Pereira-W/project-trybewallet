import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.expenseAmount = this.expenseAmount.bind(this);
    this.expenseDescription = this.expenseDescription.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
    this.categoryForExpense = this.categoryForExpense.bind(this);
    this.registeredCurrency = this.registeredCurrency.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
  }

  expenseAmount() {
    const { value } = this.state;
    return (
      <label htmlFor="expense-amount">
        Valor:
        <input
          type="text"
          data-testid="value-input"
          id="expense-amount"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />

      </label>
    );
  }

  expenseDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="expense-description">
        Descrição:
        <input
          type="text"
          data-testid="description-input"
          id="expense-description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  paymentMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method">
        Método de pagamento:
        <select
          data-testid="method-input"
          id="payment-method"
          name="method"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  categoryForExpense() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          data-testid="tag-input"
          id="tag"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  registeredCurrency() {
    const { currency } = this.state;
    return (
      <label htmlFor="registered-currency">
        Moeda:
        <select
          data-testid="currency-input"
          id="registered-currency"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
        </select>
      </label>
    );
  }

  render() {
    const { getEmail } = this.props;
    return (
      <>
        <header>
          <div>
            <p>TrybeWallet</p>
            <span data-testid="email-field">{`Email: ${getEmail}`}</span>
            <div>
              <span data-testid="total-field">0</span>
            </div>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <form>
          {this.expenseAmount()}
          {this.expenseDescription()}
          {this.registeredCurrency()}
          {this.paymentMethod()}
          {this.categoryForExpense()}
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa

          </button>
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
