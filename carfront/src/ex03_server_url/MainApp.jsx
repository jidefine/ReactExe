import {AppBar, Toolbar, Typography} from '@mui/material'
import CarList from './components/CarList';
import '../App.css';
function MainApp() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6'>
                        CarShop
                    </Typography>
                </Toolbar>
            </AppBar>
            <CarList/>
        </div>
    )
}

export default MainApp;