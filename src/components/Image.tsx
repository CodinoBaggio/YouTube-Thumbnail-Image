import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  url: string;
  text: string;
};

export const Image: FC<Props> = ({ url, text }) => {
  return (
    <Box>
      <img src={url} title={text} />
      <Typography>{text}</Typography>
    </Box>
  );
};
