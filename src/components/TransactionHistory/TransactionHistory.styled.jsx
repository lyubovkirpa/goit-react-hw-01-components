import styled from '@emotion/styled/macro';


export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-spacing: ${props => props.theme.space[0]}px;
  box-shadow: ${props => props.theme.shadows};
`;

export const Th = styled.th`
  font-family:  'Roboto', sans-serif;
  font-size:  ${p => p.theme.fontSizes[2]}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.componentBgColor};
  text-transform: uppercase;
  text-align: center;
  background-color: ${props => props.theme.colors.tableHeaderColor};
  padding: ${props => props.theme.space[3]}px;
  height: 20px;
  :not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.componentBgColor};
    border-top-color: ${props => props.theme.colors.componentBgColor};
    border-bottom-color: ${props => props.theme.colors.componentBgColor};
    border-left-color: ${props => props.theme.colors.componentBgColor};
`;

export const TableRow = styled.tr`
  background-color: ${props => props.theme.colors.componentBgColor};
  :nth-of-type(2n + 1) {
    background-color: ${props => props.theme.colors.tableCellColor};
  }
`;

export const Td = styled.td`
  font-family:'Roboto', sans-serif;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: 1.125;
  color: ${props => props.theme.colors.secondaryTextColor};
  min-width: 200px;
  text-align: center;
  padding: ${props => props.theme.space[3]}px;
  height: 20px;
  :first-of-type {
    text-transform: capitalize;
  }
  :not(:last-child) {
    border-right: 2px solid ${props => props.theme.colors.componentBgColor};
    border-top-color: ${props => props.theme.colors.componentBgColor};
    border-bottom-color: ${props => props.theme.colors.componentBgColor};
    border-left-color: ${props => props.theme.colors.componentBgColor};
  }
`;
