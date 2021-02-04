import { Container } from '@material-ui/core';
import React from 'react';
import ResourcesHero from '../components/banners/ResourcesHero';
import PageContext from '../PageContext';

const KinkResources: React.FC = () => {
  const setPageTitle = React.useContext(PageContext);
  React.useEffect(() => {
    setPageTitle('Kink Resources');
  }, []);
  return (
    <Container maxWidth="lg">
      <ResourcesHero />
      Kink Resources
    </Container>
  );
};

export default KinkResources;
