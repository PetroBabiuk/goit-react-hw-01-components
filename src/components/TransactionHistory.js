import TransactionTableItem from "./TransactionTableItem";
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <TransactionTableItem
                        currency={item.currency}
                        amount={item.amount}
                        type={item.type}
                        key={item.id}
                    />
                ))}
                
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
}

export default TransactionHistory;