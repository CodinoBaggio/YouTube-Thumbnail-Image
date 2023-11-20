import { Box, SxProps, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  url: string;
  text: string;
  sx?: SxProps;
};

export const Image: FC<Props> = ({ url, text, sx }) => {
  return (
    <Box sx={sx}>
      <img src={url} title={text} className='w-48' />
      <Typography>{text}</Typography>
    </Box>
  );
};
