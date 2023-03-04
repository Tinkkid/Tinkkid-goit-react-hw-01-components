import PropTypes from 'prop-types';
import { TableWrap, TableHead, NameRows, TypeRow, TableBody, ValueRows, Type, Amount, Currency } from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
   return (
     <TableWrap>
       <TableHead>
         <NameRows>
           <TypeRow>Type</TypeRow>
           <TypeRow>Amount</TypeRow>
           <TypeRow>Currency</TypeRow>
         </NameRows>
       </TableHead>

       <TableBody>
         {items.map(({ id, type, amount, currency }) => (
           <ValueRows key={id} typeName={type}>
             <Type>{type}</Type>
             <Amount>{amount}</Amount>
             <Currency>{currency}</Currency>
           </ValueRows>
         ))}
       </TableBody>
     </TableWrap>
   );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

