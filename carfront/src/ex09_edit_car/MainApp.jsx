// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import {AppBar, Toolbar, Typography} from '@mui/material'
import '../App.css';
import CarList from './components/CarList';

function MainApp() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'>
                        온라인 중고차 매장
                    </Typography>
                </Toolbar>
            </AppBar>
            <CarList />
        </div>
    )
}

export default MainApp;