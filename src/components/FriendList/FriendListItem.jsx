import PropTypes from 'prop-types';
import {Status, Name, Photo} from "components/FriendList/FriendList.styled"


export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li class="item">
      <Status>{isOnline}</Status>
      <Photo src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </li>
  )  
}


FriendListItem.propTypes = { 
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};


