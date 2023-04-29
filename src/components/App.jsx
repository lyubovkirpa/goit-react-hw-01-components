import Section from 'components/Section/Section';
import user from 'data/user';
import Profile from 'components/Profile/Profile';
import statistics from "data/statistics";
import Statistics from "components/Statistics/Statistics";
import friends from "data/friends"
import FriendList from "components/FriendList/FriendList"

export const App = () => {
  return (
    <>
      <Section title="Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Statistics">
        <Statistics title="Upload stats" stats={statistics} />
      </Section>
      <Section title="Friends">
        <FriendList friends={friends}/>
      </Section>
           
    </>
  );
};