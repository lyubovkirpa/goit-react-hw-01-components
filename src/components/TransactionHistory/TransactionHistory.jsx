import PropTypes from 'prop-types';

import {Table, Th, TableRow, Td, } from "./TransactionHistory.styled";

export default function TransactionHistory({items}) {
  return (
    
      <Table>
        <thead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </thead>

        <tbody>
         {items.map(({id, type, amount, currency}) => {
          return (
          <TableRow key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </TableRow> 
          );
          })}    
        </tbody>
      </Table>
    
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};