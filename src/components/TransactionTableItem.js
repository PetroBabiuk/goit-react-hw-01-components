import PropTypes from 'prop-types';

function TransactionTableItem({ currency, amount, type}) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

TransactionTableItem.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default TransactionTableItem;