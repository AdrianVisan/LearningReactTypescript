import { ReactNode } from 'react';

type CardProps = { children: ReactNode[]; highlighted?: boolean };

function Card({ children, highlighted = false }: CardProps) {
  return (
    <div
      className={`${
        highlighted ? 'bg-indigo-100' : ''
      } p-6 rounded-lg shadow-md`}>
      {children}
    </div>
  );
}
export default Card;
