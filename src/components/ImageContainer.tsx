import { FC } from 'react';
import { Box } from '@mui/material';
import { Image } from './Image';

type Props = {
  vid: string;
};

// 開発参考サイト
// http://urbanqee.com/doga/youtube-thumbnail-dl.php#thum5
// https://eeii0a5l.github.io/mochifilter_homepage/youtube_thumbnail.html

export const ImageContainer: FC<Props> = ({ vid }) => {
  return vid ? (
    <>
      <Image
        url={`http://img.youtube.com/vi/${vid}/maxresdefault.jpg`}
        text="maxresdefault.jpg (1280X720)"
      ></Image>
      <Image
        url={`http://img.youtube.com/vi/${vid}/sddefault.jpg`}
        text="sddefault.jpg (640X480)"
      ></Image>
      <Image
        url={`http://img.youtube.com/vi/${vid}/hqdefault.jpg`}
        text="hqdefault.jpg (480X360)"
      ></Image>
      <Image
        url={`http://img.youtube.com/vi/${vid}/mqdefault.jpg`}
        text="mqdefault.jpg (320X180)"
      ></Image>
      <Box display={'flex'}>
        <Image
          url={`http://img.youtube.com/vi/${vid}/default.jpg`}
          text="default.jpg (120X90)"
        ></Image>
        <Image
          url={`http://img.youtube.com/vi/${vid}/1.jpg`}
          text="1.jpg (120X90)"
        ></Image>
        <Image
          url={`http://img.youtube.com/vi/${vid}/2.jpg`}
          text="2.jpg (120X90)"
        ></Image>
      </Box>
    </>
  ) : null;
};
