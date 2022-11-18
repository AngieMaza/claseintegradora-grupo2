import { FC, PropsWithChildren } from 'react';
import { CardImageContainer } from './card.Styled';

const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <CardImageContainer>{children}</CardImageContainer>
);

export default CardImage;
