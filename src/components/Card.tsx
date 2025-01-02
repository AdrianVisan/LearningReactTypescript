import Box from '@mui/material/Box';
import { ReactNode } from 'react';

type CardProps = { children: ReactNode[]; highlighted?: boolean };

function Card({ children, highlighted = false }: CardProps) {
  return (
    <Box
      sx={{
        backgroundColor: `${highlighted ? 'primary.light' : ''}`,
        boxShadow: 2,
        padding: 2,
        borderRadius: 2,
      }}>
      {children}
    </Box>
  );
}
export default Card;
