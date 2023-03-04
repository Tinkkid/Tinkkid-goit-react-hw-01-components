import styled from '@emotion/styled';

export const TableWrap = styled.table`
  width: 320px;
  background-color: ${p => p.theme.color.transactionBackground};
  box-shadow: ${p => p.theme.color.boxShadow};

  @media (min-width: 780px) {
    width: 600px;
  }
`;

export const TableHead = styled.thead``;

export const NameRows = styled.tr`
color: white;
`;

export const TypeRow = styled.th`
  font-size: 18px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  background-color: ${p => p.theme.color.transactionHead};
`;

export const TableBody = styled.tbody`
  color: ${p => p.theme.color.transactionBodyText};
`;

export const ValueRows = styled.tr`
  background-color: ${({typeName, theme}) => {
   switch (typeName) {
      case 'payment':
         return theme.color.transactionHead;
      case 'withdrawal':
         return theme.color.transactionWithdrawal;
      case 'invoice':
         return theme.color.transactionInvoice;
      default:
         return theme.color.transactionDefault;
   }
  }};
`;

export const Type = styled.td`
  font-weight: bold;
  font-size: 18px;
  padding: 5px 10px;
  text-align: center;
`;

export const Amount = styled.td`
  font-size: 18px;
  padding: 5px;
  text-align: center;
`;

export const Currency = styled.td`
  font-size: 18px;
  padding: 5px;
  text-align: center;
`;
