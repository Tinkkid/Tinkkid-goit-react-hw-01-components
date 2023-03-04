import PropTypes from 'prop-types';
import { List, Friend, Status, Avatar, FriendName } from './Friendlist.styled';

export const FriendList = ({ friends }) => {
   return (
     <List>
       {friends.map(({ avatar, name, id, isOnline }) => (
         <Friend key={id}>
           <Status isOnline={isOnline} >{isOnline}</Status>
           <Avatar src={avatar} alt="User avatar" width="48" />
           <FriendName>{name}</FriendName>
         </Friend>
       ))}
     </List>
   ); 
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
