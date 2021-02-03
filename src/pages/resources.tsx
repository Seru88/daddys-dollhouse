import { Container } from '@material-ui/core';
import React from 'react';
import ResourcesPageHero from '../components/banners/ResourcesPageHero';

const KinkResources: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <ResourcesPageHero />
      Kink Resources
    </Container>
  );
};

export default KinkResources;
