import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationOutlined({pageCount, handlePage}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value); 
    handlePage(value);
  }
  return (
    <div className={classes.root}>
      <Pagination count={pageCount} variant="outlined" page={page} color="primary"  
        onChange={handleChange}/>
    </div>
  );
}
