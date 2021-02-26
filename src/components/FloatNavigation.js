import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    containIcon: {
      color: 'white',
    },
  }));
  
  export default function FloatingActionButtons() {
    const classes = useStyles();
  
    return (
      <div className="floatNavigation">

        <Fab className={classes.containIcon}  color="primary" aria-label="add">
          <Link  to="topbar" spy={true} smooth={true}>
          <ExpandLessIcon fontSize='large' className={classes.containIcon}/>
          </Link>
        </Fab>
      </div>
    );
  }

