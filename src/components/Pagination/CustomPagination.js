import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Pagination } from '@mui/material'
import React from 'react'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const CustomPagination = ({setPage, numOfPages=10}) => {
const handlePageChange = (page)=>{
    setPage(page)
    window.scroll(0, 0)
}  
return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div style={{
        width:"100%", 
        display:"flex", 
        justifyContent:"center", 
        marginTop:10, 
        color:"white",
    }}>
    <Pagination count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)} hideNextButton hidePrevButton color="primary"/>
    </div>
    </ThemeProvider>
  )
}

export default CustomPagination