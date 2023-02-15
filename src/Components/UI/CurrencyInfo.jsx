import * as React from "react";
import { useState } from "react";
import ScrollDialog from "../ScrollDialog/ScrollDialog";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CurrencyInfo = ({onFormSwitch}) => {
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

  const [selectValue, setSelectValue] = React.useState("");
  const handleChange = (event) => {
    setSelectValue((prev) => (prev = event.target.value));
  };
  const list =
    data.length > 0 &&
    data.map((currency) => (
      <MenuItem
        key={currency.id}
        value={currency.currency}
      >{`${currency.country} ( ${currency.currency} )`}</MenuItem>
    ));

  return (
    <>
    <h4 className="header__title">Wallet Details:</h4>
      <div className="mr__b__xl">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">country and currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            label="Age"
            onChange={handleChange}
          >
            {data.length > 0 && list}
          </Select>
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
        onFormSwitch={() => onFormSwitch(3)}
      >
        <div className="modal-contents">
          <button className="close-modal" onClick={handleClose}>
            X
          </button>
          <>You have selected <span style={{fontWeight: '600'}}>{selectValue}</span> currency</>
        </div>
      </ScrollDialog>
    </>
  );
};
export default CurrencyInfo;
