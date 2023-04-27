import PropTypes from "prop-types";

const Profile = ({
  username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: { followers, views, likes },
}) =>  { return (<div>
        <div>
          <img src="" alt={avatar} className={avatar}/>
          <p className={username} >{username}</p>
          <p className={tag} >"@"{tag}</p>
          <p className={location} >{location}</p>
        </div>
        <ul className="stats">
          <li>
            <span className="label">{followers}</span>
            <span className="quantity">{1000}</span>
          </li>
          <li>
            <span className="label">{views}</span>
            <span className="quantity">{2000}</span>
          </li><li>
            <span className="label">{likes}</span>
            <span className="quantity">{3000}</span>
          </li>      
        </ul>
      </div>)
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}

export default Profile;