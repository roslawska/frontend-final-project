import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Text } from './MovieDetail.style';
import { Typography } from '@mui/material';

export default function MovieDetailDescription({
  description,
}: MovieDetailDescriptionProps) {
  return (
    <Wrapper>
      <Label>
        <Typography variant='h3' fontSize={20}>
          Description
        </Typography>
      </Label>
      <Typography variant='body1' fontSize={13}>
        {description}
      </Typography>
    </Wrapper>
  );
}

export type MovieDetailDescriptionProps = {
  description: string | null;
};

MovieDetailDescription.propTypes = {
  description: PropTypes.string,
};
