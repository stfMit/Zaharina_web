import logo from '../../assets/cookie_ai.png';
import Box from '@mui/material/Box';
import './App.css';

function LoadingScreen() {


    const bites = [...Array(6)].map((_, i) =>
        <Box className={"Bite"}
             key={`bite-${i}`}/>);
    console.log(bites);
    return (
        <Box className="App-header">
            <Box style={{border: 'solid 2px red', display: 'flex', justifyContent: 'center'}}>
                <img src={logo} className="App-logo" alt="logo"/>
            </Box>
            <Box>
                {bites}
            </Box>

        </Box>
    );
}

export default LoadingScreen;
