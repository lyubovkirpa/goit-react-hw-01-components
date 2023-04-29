import styled from '@emotion/styled';

export const Status = styled.span`
  &::before {
    content: ' ';
    display: block;
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: ${p => p.theme.space[2]}px;
    ${({ isOnline }) => {
      if (isOnline) {
        return `
         background-color: green; `;
      }
    }}
  }
`;

export const Name = styled.p`
  margin-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[4]}px;  
`;

export const Photo = styled.img`
   {
    display: block;
  }
`;