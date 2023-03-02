import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {

};

TransactionHistory.propTypes = {
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired
}