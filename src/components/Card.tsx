import { Box } from '@mui/material';
import { ReactNode } from 'react';

type CardProps = { children: ReactNode[]; highlighted?: boolean };

function Card({ children, highlighted = false }: CardProps) {
  return (
    <Box
      sx={{
        backgroundColor: `${highlighted ? 'lightsteelblue' : ''}`,
        boxShadow: 2,
        padding: 2,
        borderRadius: 2,
      }}>
      {children}
    </Box>
  );
}
export default Card;
