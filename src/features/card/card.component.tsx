import { FC, PropsWithChildren } from 'react';
import CardImage from 'features/card/card-image.component';
import CardBody from 'features/card/card-body.component';
import { CardContainer } from './card.Styled';

type CompoundCard = FC<PropsWithChildren<object>> & {
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <CardContainer>{children}</CardContainer>
);

Card.Image = CardImage;
Card.Body = CardBody;

export default Card;
