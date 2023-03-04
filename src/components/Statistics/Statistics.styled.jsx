import styled from '@emotion/styled'

export const StatWrap = styled.section`
  width: fit-content;
  margin-bottom: 50px;
  box-shadow: ${p => p.theme.color.boxShadow};
`;
export const Title = styled.h2`
text-align: center;
  font-weight: bold;
  font-size: 24px;
  padding: 30px;
  color: ${p => p.theme.color.statsTitleColor};
  background-color: ${p => p.theme.color.statsBackground};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  

  
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: ${p=>`1px solid ${p.theme.color.labelPdf}`};
  padding: 22px;
  background-color: ${({ label, theme }) => {
    switch (label) {
      case '.docx':
        return theme.color.labelDocx;
      case '.pdf':
        return theme.color.labelPdf;
      case '.mp3':
        return theme.color.labelMp3;
      case '.psd':
        return theme.color.labelPsd;
      default:
        return theme.color.statsBackground;
    }
  }};
`;
export const LabelName = styled.span`
   font-weight: bold;
   font-size: 20px;
   margin-bottom: 6px;
`
export const Value = styled.span`
  font-size: 18px;
`;