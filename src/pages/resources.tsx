import { Container } from '@material-ui/core';
import React from 'react';
import ResourcesHero from '../components/banners/ResourcesHero';

const KinkResources: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <ResourcesHero />
      Kink Resources
    </Container>
  );
};

export default KinkResources;
