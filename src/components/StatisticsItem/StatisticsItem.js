import s from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

function StatisticsItem({ label, percentage, bgcolor }) {
    return (
        <li className={s.item} style={{backgroundColor: bgcolor}}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    );
}

StatisticsItem.propTypes = {
    bgcolor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;