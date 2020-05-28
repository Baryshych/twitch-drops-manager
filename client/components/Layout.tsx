import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        {loading ? (
          <Box
            display="flex"
            style={{
              marginTop: '2em',
            }}
            height={80}
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        ) : (
          children
        )}
      </Container>
    </div>
  );
}
