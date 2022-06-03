import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { COLOR_WHITE, COLOR_GRAY } from 'src/shared/styles/themes/colors';
import { Button, Typography, Box } from '@mui/material';

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${COLOR_WHITE};
  margin-bottom: 3rem;
  text-align: center;
`;

const Back = styled.div`
  align-self: flex-start;
  margin-bottom: 1.5rem;

  a {
    font-family: inherit;
    font-size: 1.6rem;
    color: ${COLOR_GRAY};
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-family: 'Star Jedi', 'Open Sans', sans-serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
`;

const Team = styled.p`
  font-family: inherit;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default function MovieDetailHeader({
  title,
  director,
  producer,
}: MovieDetailHeaderProps) {
  return (
    <Box>
      <Box>
        <Link to='/'>
          <Button variant='text' color='error'>
            <Typography variant='subtitle1' fontSize={12}>
              &larr; Back to list
            </Typography>
          </Button>
        </Link>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        gap={1}
        marginBottom={2}
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h2'> {title} </Typography>
        <Typography variant='h4' fontStyle={'italic'}>
          Director : {director}{' '}
        </Typography>
        <Typography variant='h5' fontStyle={'italic'}>
          Producer : {producer}{' '}
        </Typography>
      </Box>
    </Box>
  );
}

export type MovieDetailHeaderProps = {
  title: string | null;
  director: string | null;
  producer: string | null;
};

MovieDetailHeader.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
};
