import '../../src/css/global.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../src/theme';
import PageContext from '../../src/PageContext';

const TopLayout = props => {
  const [title, setTitle] = React.useState('');
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | MyAwesomeWebsite.com">
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="keywords"
          content="macrophilia, microphilia, shrunken woman, giant man, size fetish, community"
        />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        /> */}
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <PageContext.Provider value={setTitle}>
          {props.children}
        </PageContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default TopLayout;
