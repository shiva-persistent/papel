import * as React from "react";
import { useState } from "react";
import ScrollDialog from "../ScrollDialog/ScrollDialog";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const CategoryInfo = ({ onFormSwitch }) => {
  const [data, setData] = useState([
    { id: 1, country: "india", currency: "rupee" },
    { id: 2, country: "uk", currency: "gbp" },
  ]);

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const handleClickOpen =
    (scrollType = "body") =>
    () => {
      if (true) {
        setOpen(true);
        setScroll(scrollType);
      }
    };
  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState("individual");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h4 className="header__title">Wallet Details:</h4>
      <div className="mr__b__xl">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Category Type:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={value}
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="individual"
              control={<Radio />}
              label="Individual"
            />
            <FormControlLabel
              value="business"
              control={<Radio />}
              label="Business"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <button className="btn__cancel mr__b__sm">cancel</button>
        <button className="btn__next" onClick={handleClickOpen("body")}>
          next
        </button>
      </div>

      <ScrollDialog
        open={open}
        scroll={scroll}
        handleClose={handleClose}
        dialogTitle="Confirmation"
        desc=""
        defaultBtn="reject"
        successBtn="accept"
        onFormSwitch={() => onFormSwitch(4)}
      >
        <div className="modal-contents">
          <button className="close-modal" onClick={handleClose}>
            X
          </button>
          <>
            You have selected <span style={{ fontWeight: "600" }}>{value}</span>{" "}
            type.
          </>
        </div>
      </ScrollDialog>
    </>
  );
};
export default CategoryInfo;
