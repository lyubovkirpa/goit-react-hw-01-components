import PropTypes from "prop-types";

const Profile = ({
  username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: { followers, views, likes },
}) =>  { <div>
        <div>
          <img src="" alt={avatar} class={avatar}/>
          <p class={username} >{username}</p>
          <p class={tag} >"@"{tag}</p>
          <p class={location} >{location}</p>
        </div>
        <ul class="stats">
          <li>
            <span class="label">{followers}</span>
            <span class="quantity">{1000}</span>
          </li>
          <li>
            <span class="label">{views}</span>
            <span class="quantity">{2000}</span>
          </li><li>
            <span class="label">{likes}</span>
            <span class="quantity">{3000}</span>
          </li>      
        </ul>
      </div>
}

{/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      // <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */}

Profile.PropTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}

export default Profile;