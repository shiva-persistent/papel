import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Modal from "../Modal/Modal";
import ScrollDialog from "../ScrollDialog/ScrollDialog";

function AccountInfo({ onFormSwitch }) {
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

  const [modal, setModal] = useState(false);

  const initialvalues = {
    username: "",
    surname: "",
    email: "",
    dob: "",
    nin: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) errors.username = "Username is required!";
    if (!values.surname) errors.username = "Surname is required!";
    if (!values.email) errors.username = "Email is required!";
  };

  const btn__default = {
    backgroundColor: "#dddddd",
    border: "1px solid #dddddd",
    color: "#454545",
    textTransform: "uppercase",
    width: "100%",
    minWidth: "20rem",
    maxWidth: "20rem",
    margin: "auto",
    padding: "0.6rem",
    marginTop: "1rem",
    borderRadius: "2rem",
    display: "block",
  };

  const btn__success = {
    backgroundColor: "#22979c",
    border: "1px solid #22979c",
    color: "#ffffff",
    textTransform: "uppercase",
    width: "100%",
    minWidth: "20rem",
    maxWidth: "20rem",
    margin: "auto",
    padding: "0.6rem",
    marginTop: "1rem",
    borderRadius: "2rem",
    display: "block",
  };

  return (
    <>
      <h4 className="header__title">Sign Up</h4>
      <p className="verify__text">
        Enter your email address and create a password to create your account.
      </p>

      <div className="dis__container">
        <form onSubmit={handleSubmit}>
          <div className="form__input">
            <input
              type="text"
              placeholder="Name"
              name="username"
              onChange={handleChange}
              value={formValues.username}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Surname"
              name="surname"
              onChange={handleChange}
              value={formValues.surname}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="E-mail Address"
              name="email"
              onChange={handleChange}
              value={formValues.email}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Dob"
              name="dob"
              onChange={handleChange}
              value={formValues.dob}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="NIN"
              name="nin"
              onChange={handleChange}
              value={formValues.nin}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formValues.password}
            />
          </div>
          <div className="form__input">
            <input
              type="text"
              placeholder="Password Repeat"
              name="confirmpassword"
              onChange={handleChange}
              value={formValues.confirmpassword}
            />
          </div>
          <button
            className="btn__next"
            type="button"
            onClick={handleClickOpen("paper")}
          >
            sign up
          </button>
        </form>
      </div>

      {/* {modal && <Modal modalProp={modal} toggleModalProp={toggleModal} />} */}
      <ScrollDialog
        open={open}
        scroll={scroll}
        handleClose={handleClose}
        dialogTitle="Congratulations!"
        desc=""
        defaultBtn="reject"
        successBtn="accept"
        onFormSwitch={() => onFormSwitch(1)}
      >
        <div className="modal-contents">
          <button className="close-modal" onClick={handleClose}>
            X
          </button>
          <h5>Membership Created!</h5>
          <p className="modal__summary">Start using Papel now...</p>
          <button className="btn__success">start using papel!</button>
          {/* <div>
            <Button onClick={handleClose} style={btn__default}>
              reject
            </Button>
          </div>
          <div>
            <Button style={btn__success}>
              accept
            </Button>
          </div> */}
        </div>
      </ScrollDialog>
    </>
  );
}

export default AccountInfo;
