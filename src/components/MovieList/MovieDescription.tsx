import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Fade } from '@mui/material';

export default function MovieDescription({
  description,
}: MovieDescriptionProps) {
  return (
    <Fade in={true} timeout={2000}>
      <Typography variant='body1' sx={{ fontSize: 14, paddingBottom: 2 }}>
        {description.substring(0, 260)}...
      </Typography>
    </Fade>
  );
}

export type MovieDescriptionProps = {
  description: string;
};

MovieDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
