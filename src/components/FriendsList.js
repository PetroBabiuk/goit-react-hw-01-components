import FriendsListItem from "./FriendsListItem";
import PropTypes from 'prop-types';

function FriendsList({ friends }) {
    return (
        <ul class="friend-list">
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