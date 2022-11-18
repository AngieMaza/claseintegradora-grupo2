import { FC } from 'react';
import { useLanguage } from 'features/language/index';
import { LanguageButton, LanguageContainer } from './lenguage.Styled';

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <LanguageContainer>
      <LanguageButton language={language} onClick={() => setLanguage('SPANISH')}>
        {t('language.spanish')}
      </LanguageButton>
      <LanguageButton language={language} onClick={() => setLanguage('ENGLISH')}>
        {t('language.english')}
      </LanguageButton>
      <LanguageButton language={language} onClick={() => setLanguage('PORTUGUESE')}>
        {t('language.portuguese')}
      </LanguageButton>
    </LanguageContainer>
  );
};
export default LanguageComponent;
