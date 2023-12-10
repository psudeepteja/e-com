import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Container
        component="footer"
        style={{
          marginTop: '20px',
          textAlign: 'center',
          borderTop: '1px solid #ccc', // Add border-top
          paddingTop: '20px', // Add some padding-top for spacing
          marginBottom: '20px' // Add margin-bottom for spacing
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} My MUI App. All rights reserved.{' '}
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>  
    );
}

