import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: orange;
  gap: 10px;
  margin-bottom: 50px;
`;
export const Friend = styled.li`
  display: flex;
  align-items: center;
  background-color: green;
  gap: 10px;
  padding: 10px 20px;
`;
export const Status = styled.span`
   width: 20px;
   height: 20px;
   background-color: red;
   border-radius: 50%;
`
export const Avatar = styled.img`
   width: 100px;
`
export const FriendName = styled.p`
   font-size: 24px;
   font-weight: bold;
`