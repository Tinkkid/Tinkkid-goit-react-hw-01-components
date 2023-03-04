import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  background-color: ${props => props.theme.color.white};
  width: fit-content;
  margin-bottom: 50px;
  box-shadow: ${p => p.theme.color.boxShadow};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

export const AvatarImg = styled.img`
  margin: 10px auto;
`;
export const AvatarName = styled.p`
  margin: 5px auto;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const AvatarText = styled.p`
  margin: 5px auto;
  font-size: 16px;
  color: ${props => props.theme.color.avatarText};
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: ${props => props.theme.color.avatarText};
`;

export const StatisticItem = styled.li`
  border-right: ${props => `1px solid ${props.theme.color.white}`};
  color: ${props => props.theme.color.white};
  text-align: center;
  padding: 24px;
  display: flex;
  flex-flow: column;
`;

export const StatisticName = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StatisticData = styled.span`
`;
