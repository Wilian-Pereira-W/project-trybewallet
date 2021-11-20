import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <div>
          <p>TrybeWallet</p>
          <span data-testid="email-field">{ getEmail }</span>
          <div>
            <span data-testid="total-field">0</span>
          </div>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>);
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
