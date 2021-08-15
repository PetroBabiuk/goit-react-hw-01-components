import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

function Statistics({ title, stats }) {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>

            <ul class="stat-list">
                {stats.map(stat => (
                    <StatisticsItem
                        label={stat.label}
                        percentage={stat.percentage}
                        key={stat.id}
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