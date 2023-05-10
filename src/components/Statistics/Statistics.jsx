import PropTypes from 'prop-types';
import { Box } from 'components/Box.styled';
import { Title, Label } from './Statistics.styled';
import rundomColor from 'utils/rundomColor';

export default function Statistics ({title, stats}) {
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
     {title && <Title>{title}</Title>}
      <Box as="ul" display="flex" width="100%" height="60px">
        {stats.map(({ id, label, percentage }) => {
          return (
            <Box
              key={id}
              bg={rundomColor()}
              color="mainTextColor"
              fontSize={3}
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Label>{label}</Label>
              <span>{percentage + '%'}</span>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
}