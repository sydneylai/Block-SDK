import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from '@mui/icons-material/Create';
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    top: 0,
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1
  },
  spacer: {
    flexGrow: 1
  },
  body: {
    flexGrow: 1
  }
});

export default function Widget({ children, id, onRemoveItem, onEditItem }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ boxShadow: 0 }}>
      <div className={classes.header}>
        <IconButton aria-label="edit" onClick={() => onEditItem(id)}>
          <CreateIcon style={{ color: '#1A1B23' }} />
        </IconButton>
        <div className={classes.spacer} />
        <Typography variant="subtitle1" gutterBottom>
          { }
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
          <CloseIcon style={{ color: '#1A1B23' }} />
        </IconButton>
      </div>
      <div className={classes.body}> {children}</div>
    </Card>
  );
}