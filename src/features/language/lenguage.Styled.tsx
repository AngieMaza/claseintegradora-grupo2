import styled, { css } from 'styled-components';
import Languages from './language.types';

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

export const LanguageButton = styled.button<{ language: Languages }>`
  background-color: white;
  padding: 4px 2px;
  margin-right: 10px;
  ${(props) =>
    (props.language === 'SPANISH' ||
      props.language === 'PORTUGUESE' ||
      props.language === 'ENGLISH') &&
    css`
      color: white;
      background-color: #17589f;
    `}
`;
