import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Typography, Box } from '@mui/material';

export default function MovieLink({ id }: MovieLinkProps) {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Link to={`/movie/${id}`}>
        <Button variant='outlined' color='warning'>
          <Typography variant='body2' align='center'>
            More info
          </Typography>
        </Button>
      </Link>
    </Box>
  );
}

export type MovieLinkProps = {
  id: number;
};

MovieLink.propTypes = {
  id: PropTypes.number.isRequired,
};
