import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieHeader from './MovieHeader';
import MovieDescription from './MovieDescription';
import MovieLink from './MovieLink';

import { MovieDataType } from 'src/shared/helpers/api';
import { Grid } from '@mui/material';

import { COLOR_BACKGROUND, COLOR_WHITE } from 'src/shared/styles/themes/colors';
import {
  BOX_SHADOW_PRIMARY,
  BOX_SHADOW_PRIMARY_HOVER,
} from 'src/shared/styles/themes/box-shadow';



const MovieContent = styled.div`
  display: block;
  background-color: ${COLOR_BACKGROUND};
  padding: 2rem;
  color: ${COLOR_WHITE};
  transform: perspective(1px) translateZ(0);
  box-shadow: ${BOX_SHADOW_PRIMARY};
  transition: all 0.3s;
  overflow: hidden;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: ${BOX_SHADOW_PRIMARY_HOVER};
  }
`;

export default function MovieItem({
  id,
  title,
  description,
  releaseDate,
}: MovieDataType) {
  return (
    <Grid xs={12} maxWidth='600px' >
      <Grid item minHeight='300px' marginBottom={1} >
      <MovieContent>
        <MovieHeader id={id} title={title} releaseDate={releaseDate} />
        <MovieDescription description={description} />
        <MovieLink id={id} />
      </MovieContent>
      </Grid>
    </Grid>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
