import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { formatDate } from 'src/shared/helpers/format-date';

export default function MovieHeader({
  id,
  title,
  releaseDate,
}: MovieHeaderProps) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant='h3' align='center'>
          <Link to={`/movie/${id}`}>{title}</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6' align='center' paddingBottom={2}>
          {formatDate(releaseDate)}
        </Typography>
      </Grid>
    </Grid>
  );
}

export type MovieHeaderProps = {
  id: number;
  title: string;
  releaseDate: string;
};

MovieHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};
