import { ReactNode } from 'react';

type CardProps = { children: ReactNode[]; background?: string };

function Card(input: CardProps) {
  const { background, children } = input;
  return (
    <div className={`${background} p-6 rounded-lg shadow-md`}>{children}</div>
  );
}
export default Card;
