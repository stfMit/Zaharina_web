import logo from '../../assets/cookie_ai.png';
import Box from '@mui/material/Box';
import './App.css';

function LoadingScreen() {

    const positions=[{x:0,y:5},{x:30,y:0},{x:45,y:10},{x:5,y:35},{x:50,y:40},{x:20,y:60},]
    const bites = [...Array(6)].map((_, i) =>
        <Box className={"Bite"} sx={{left:`${positions[i].x}%`,top:`${positions[i].y}%`}} keyProp={`bite-${i}`}/>);
    return (
        <Box className="App-header">
            <Box style={{position:'relative', display: 'flex', justifyContent: 'center'}}>
                <img src={logo} className="App-logo" alt="logo"/>
                {bites}
            </Box>
        </Box>
    );
}

export default LoadingScreen;
