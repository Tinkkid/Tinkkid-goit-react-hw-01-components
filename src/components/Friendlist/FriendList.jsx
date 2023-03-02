import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
   return (
      <ul>
         {friends.map(({ avatar, name, id, isOnline }) => (
            <li key={id}>
               <span>{isOnline}</span>
               <img src={avatar} alt="User avatar" width="48" />
               <p>{name}</p>
            </li>
         ))}        
   </ul>     
   ) 
}

FriendList.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
   id: PropTypes.number.isRequired
}
