import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class App extends React.Component{
	render(){
		return (
			<div>
				<AppBar>
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu">
	            			<MenuIcon />
	          			</IconButton>
	          			<Typography variant="h5">
            				Home
          				</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
export default App