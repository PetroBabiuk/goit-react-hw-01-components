import StatisticsItem from '../StatisticsItem';
import getRandomColor from '../../js/randomColor';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            { title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
                {stats.map(stat => (
                    <StatisticsItem
                        label={stat.label}
                        percentage={stat.percentage}
                        key={stat.id}
                        bgcolor={getRandomColor()}
                    />
                    
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
}

export default Statistics;