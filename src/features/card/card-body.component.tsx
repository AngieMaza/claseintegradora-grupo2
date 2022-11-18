import { FC, PropsWithChildren } from 'react';
import { CardBodyContainer } from './card.Styled';
const CardBody: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <CardBodyContainer>{children}</CardBodyContainer>
);

export default CardBody;
