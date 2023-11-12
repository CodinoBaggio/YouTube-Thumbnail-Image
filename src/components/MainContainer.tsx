import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { ImageContainer } from './ImageContainer';

export const MainContainer = () => {
  const [url, setUrl] = useState('');
  const [vid, setVid] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleClick = () => {
    // 正規表現で[https://www.youtube.com/watch?v=XXXXX&list=RDMMpgXpM4l_MwI&index=27]からv=XXXXXを抽出する
    const regExp = new RegExp('v=([^&]*)');
    const result = url.match(regExp);
    if (result) {
      setVid(result[1]);
    } else{
    // 正規表現で[https://youtu.be/XXXXX?si=XTPTyQZTiISkBAzL]からv=XXXXXを抽出する
    const regExpNext = new RegExp('https://youtu.be/([^?]*).*');
      const resultNext = url.match(regExpNext);
      if (resultNext) {
        setVid(resultNext[1]);
      } else {
        alert('URLが正しくありません。');
      }
    }
  };

  return (
    <>
      <Box display="flex">
        <TextField
          label="YouTubeのURLを入力してください。"
          onChange={handleChange}
          sx={{ marginRight: '10px', width: '75%' }}
        />
        <Button variant="outlined" onClick={handleClick} sx={{ width: '25%' }}>
          画像取得
        </Button>
      </Box>
      <ImageContainer vid={vid} />
    </>
  );
};
