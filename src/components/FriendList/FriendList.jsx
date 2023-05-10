import PropTypes from 'prop-types';
import { Box } from 'components/Box.styled';
import FriendListItem from './FriendListItem';


export default function FriendList({friends}) {
  return (
    <Box as="ul" display="flex" flexDirection="column" alignItems="center"
    >
    {friends.map(({id, isOnline, avatar, name})=> (
      <FriendListItem 
        key={id}
        id={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}         
      />
   ))}
    </Box>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,    
}