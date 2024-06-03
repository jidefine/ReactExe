import {AppBar, Toolbar, Typography} from '@mui/material'
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
        </div>
    )
}

export default MainApp;