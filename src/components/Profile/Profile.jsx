import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  ProfileText,
  StatsItem,
  StatsNumber,
} from './Profile.styled';

import { Box } from 'components/Box.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      bg="componentBgColor"
      borderRadius="2px"    
      mx="auto"
      width="280px"
      boxShadow= "rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        my={4}
        mx="auto"
        
      >
        <Avatar src={avatar} alt={`${username}'s avatar`} />
        <Name>{username}</Name>
        <ProfileText>{`@${tag}`}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </Box>

      <Box width="100%" display="flex" justifyContent="space-around" bg="rgb(0 0 0 / 10%)">
        <StatsItem>
          <span>Followers</span>
          <StatsNumber>{stats.followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsNumber>{stats.views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsNumber>{stats.likes}</StatsNumber>
        </StatsItem>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};