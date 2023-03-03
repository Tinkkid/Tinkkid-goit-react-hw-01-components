import PropTypes from 'prop-types';
import {StatWrap,Title, List, Item, LabelName, Value} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrap>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <LabelName>{label}</LabelName>
            <Value>{percentage}%</Value>
          </Item>
        ))}
      </List>
    </StatWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
