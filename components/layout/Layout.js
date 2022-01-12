import MainNavigation from './MainNavigation';
import { Paper } from '@mui/material';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <Paper>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Paper>
  );
}

export default Layout;
