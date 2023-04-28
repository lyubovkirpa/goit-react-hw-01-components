import Section from 'components/Section/Section';
import Profile from 'components/Profile/Profile';
import user from 'data/user';


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
    </>
  );
};