import { Box } from "@mui/material"
import logoImage from '../assets/logo.png'

export const Header = () => {
  return (
    <Box className='m-10' display='flex' justifyContent='center' alignItems='center'>
      <img src={logoImage} alt='logo' className='h-36' />
    </Box>
  )
}
