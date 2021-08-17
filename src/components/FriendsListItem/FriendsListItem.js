import s from './FriendsListItem.module.css';
import PropTypes from 'prop-types';

function FriendsListItem({ avatar, name, isOnline}) {
    return (
        <li className={s.item}>
            <span className={s.status} style={{backgroundColor: isOnline ? 'green' : 'red'}} />
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem;