import PropTypes from 'prop-types';
import {Status, Name, Photo} from "components/FriendList/FriendList.styled"
import { Box } from 'components/Box.styled';

export default function FriendListItem({id, avatar, name, isOnline}) {
  return (
    <Box
    key={id}
    as="li"
    width="200px"
    height="60px"
    mb={2}
    pl={3}
    pb={1}
    pt={1}    
    borderRadius="4px"
    display="flex"
    alignItems="center"
    bg="componentBgColor"
    boxShadow="default">
      <Status isOnline={isOnline}></Status>
      <Photo src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Box>
  )  
}


FriendListItem.propTypes = { 
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};


