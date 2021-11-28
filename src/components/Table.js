import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  constructor() {
    super();
    this.currency = this.currency.bind(this);
    this.convertedValue = this.convertedValue.bind(this);
    this.exchangeUsed = this.exchangeUsed.bind(this);
    // this.conversionCurrency = this.conversionCurrency.bind(this);
  }

  currency(expense) {
    const { currency } = expense;
    const valores = Object.values(expense.exchangeRates);
    const moedaSelecionada = valores.find((moeda) => moeda.code === currency);
    const nomeDaMoeda = moedaSelecionada.name;
    const nomeMoeda = nomeDaMoeda.split('/')[0];
    return nomeMoeda;
  }

  convertedValue(expense) {
    const { currency, value } = expense;
    const valores = Object.values(expense.exchangeRates);
    const moedaSelecionada = valores.find((moeda) => moeda.code === currency);
    const valorDaMoeda = moedaSelecionada.ask;
    const valorConvertido = valorDaMoeda * value;
    const valorConvertidoFormatado = parseFloat(valorConvertido.toFixed(2));
    return valorConvertidoFormatado;
  }

  exchangeUsed(expense) {
    const { currency } = expense;
    const valores = Object.values(expense.exchangeRates);
    const moedaSelecionada = valores.find((moeda) => moeda.code === currency);
    const valorMoeda = moedaSelecionada.ask;
    const valorDaMoedaFormatada = parseFloat(valorMoeda);
    return valorDaMoedaFormatada.toFixed(2);
  }

  // conversionCurrency(expense) {
  //   const { currency } = expense;
  //   const valores = Object.values(expense.exchangeRates);
  //   const moedaSelecionada = valores.find((moeda) => moeda.code === currency);
  //   const nomeDaMoeda = moedaSelecionada.name;
  //   const nomeMoeda = nomeDaMoeda.split('/')[1];
  //   const nomeDaMoedaReal = nomeMoeda.split(' ')[0];
  //   console.log(nomeDaMoeda);
  //   return nomeDaMoedaReal;
  // }

  render() {
    const { getExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {getExpense.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>
                {this.currency(expense)}
              </td>
              <td>
                {this.exchangeUsed(expense)}
              </td>
              <td>
                {this.convertedValue(expense)}
              </td>
              <td>
                Real
              </td>
            </tr>))}
        </tbody>
      </table>);
  }
}

Table.propTypes = {
  getExpense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  getExpense: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
