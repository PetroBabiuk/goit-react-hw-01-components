import FriendsListItem from "../FriendsListItem";
import s from './FriendsList.module.css';
import PropTypes from 'prop-types';

function FriendsList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <FriendsListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
        </ul>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
}

export default FriendsList;