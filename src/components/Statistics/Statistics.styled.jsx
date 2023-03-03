import styled from '@emotion/styled'

export const StatWrap = styled.section`
  width: fit-content;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const Title = styled.h2`
text-align: center;
  font-weight: bold;
  font-size: 24px;
  padding: 30px;
  background-color: grey;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  background-color: purple;
  
`;
export const Item = styled.li`
display: flex;
flex-direction: column;
  border: 1px solid white;
  padding: 22px;
`;
export const LabelName = styled.span`
   font-weight: bold;
   font-size: 20px;
   margin-bottom: 6px;
`
export const Value = styled.span`
  font-size: 18px;
`;