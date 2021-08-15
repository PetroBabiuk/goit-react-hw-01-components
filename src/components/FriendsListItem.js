import PropTypes from 'prop-types';

function FriendsListItem({ avatar, name, isOnline}) {
    return (
        <li class="item">
            {/* {isOnline ? "online" : "offline" } */}
            <span class="status"></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
    );
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendsListItem;