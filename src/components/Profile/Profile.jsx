import PropTypes from 'prop-types';
import {
  ProfileWrap,
  ProfileInfo,
  AvatarImg,
  AvatarName,
  AvatarText,
  StatisticList,
  StatisticItem,
  StatisticName,
  StatisticData,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
   return (
     <ProfileWrap>
       <ProfileInfo>
         <AvatarImg src={avatar} alt="User avatar" width={150} height={150} />
         <AvatarName>{username}</AvatarName>
         <AvatarText>{tag}</AvatarText>
         <AvatarText>{location}</AvatarText>
       </ProfileInfo>

       <StatisticList>
         <StatisticItem>
           <StatisticName>Followers</StatisticName>
           <StatisticData>{stats['followers']}</StatisticData>
         </StatisticItem>
         <StatisticItem>
           <StatisticName>Views</StatisticName>
           <StatisticData>{stats['views']}</StatisticData>
         </StatisticItem>
         <StatisticItem>
           <StatisticName>Likes</StatisticName>
           <StatisticData>{stats['likes']}</StatisticData>
         </StatisticItem>
       </StatisticList>
     </ProfileWrap>
   );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};