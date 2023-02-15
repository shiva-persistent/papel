import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ScrollDialog({
  open,
  scroll,
  handleClose,
  children,
  dialogTitle,
  desc,
  defaultBtn,
  successBtn,
  onFormSwitch
}) {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const btn__default = {
    backgroundColor: "#dddddd",
    border: "1px solid #dddddd",
    color: "#454545",
    textTransform: "uppercase",
    width: '100%',
    minWidth: '20rem',
    maxWidth: '20rem',
    margin: 'auto',
    padding: "0.6rem",
    marginTop: "1rem",
    borderRadius: "2rem",
    display:'block'
  };

  const btn__success = {
    backgroundColor: "#22979c",
    border: "1px solid #22979c",
    color: "#ffffff",
    textTransform: "uppercase",
    width: '100%',
    minWidth: '20rem',
    maxWidth: '20rem',
    margin: 'auto',
    padding: "0.6rem",
    marginTop: "1rem",
    borderRadius: "2rem",
    display:'block'
  };

  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        
        <DialogTitle id="scroll-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)].map(() => desc).join("\n")}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions style={{display: 'block'}}>
          <div>
            <Button onClick={handleClose} style={btn__default}>
              {defaultBtn}
            </Button>
          </div>
          <div>
            <Button onClick={(val) => onFormSwitch(val)} style={btn__success}>
              {successBtn}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
