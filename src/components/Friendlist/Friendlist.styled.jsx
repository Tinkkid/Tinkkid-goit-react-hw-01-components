import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;

  gap: 10px;
  margin-bottom: 50px;
`;
export const Friend = styled.li`
  display: flex;
  align-items: center;
  box-shadow: ${p => p.theme.color.boxShadow};
  background-color: ${p => p.theme.color.friendsCard};
  gap: 10px;
  padding: 10px 20px;
`;
export const Status = styled.span`
   width: 20px;
   height: 20px;
   border-radius: 50%;

   background-color: ${({isOnline, theme}) => {
   switch (isOnline) {
      case true:
         return theme.color.isOnline;
      case false:
         return theme.color.isOffline;
      default: return theme.color.black;
   }
}};
   
`
export const Avatar = styled.img`
   width: 100px;
`
export const FriendName = styled.p`
   font-size: 24px;
   font-weight: bold;
`