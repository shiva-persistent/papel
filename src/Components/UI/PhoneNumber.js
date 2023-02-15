import { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import AgreementModal from "../Modal/AgreementModal";
import CenteredTabs from "../Tabs/CenteredTabs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Tabs from "../Tabs/Tabs";
import ScrollDialog from "../ScrollDialog/ScrollDialog";
// import HorizontalLabelPositionBelowStepper from './HorizontalLabelPositionBelowStepper';

function PhoneNumber({ onFormSwitch }) {
  const [modal, setModal] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [countrycode, setCountrycode] = useState("90");

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

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

  return (
    <>
      <h4 className="header__title">Sign Up</h4>
      {/* <HorizontalLabelPositionBelowStepper /> */}
      {/* <CenteredTabs /> */}
      <Tabs toggleState={toggleState} toggleTab={toggleTab}>
        {toggleState === 1 && (
          <div>
            <p className="verify__text">
              An SMS Verification Code will be sent to the phone you enter so
              that your account can be created.
            </p>
            <PhoneInput
              placeholder="( 5_ _ )_ _ _ _ _ _ _"
              country={"90"}
              value={countrycode}
              onChange={(phone) => {
                console.log("countrycode", countrycode);
                console.log("phone", phone);
                setCountrycode(phone);
              }}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
            />
          </div>
        )}
        {toggleState === 2 && (
          <div>
            <p className="verify__text">
              An Email Verification Code will be sent to the email you enter so
              that your account can be created.
            </p>
            <div className="form__input">
              <input type="text" placeholder="Email" name="email" />
            </div>
          </div>
        )}
      </Tabs>

      {/* <div className="dis__container__sm">
        <div className="dis__flex__sm">
          <div className="flex__auto__sm">
            <input
              type="text"
              className="input__country__code"
              defaultValue={"+91"}
            />
          </div>
          <div className="flex__col__sm">
            <input
              type="text"
              className="input__phone"
              placeholder="( 5_ _ )_ _ _ _ _ _ _"
            />
          </div>
        </div>
      </div> */}
      <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
        <div className="input__radio dis__flex j__c__c a__i__c">
          <input type="radio" id="agree" />
          <label htmlFor="agree" className="read__agreement">
            I have read the <a>User Agreement</a> , I accept
          </label>
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}>
        <Link to="/login" className="btn__login">
          if you have an account login
        </Link>
      </div>

      <button
        style={{
          opacity: disabled ? "0.7" : "1",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        className="btn__success__register"
        disabled={disabled}
        onClick={handleClickOpen("paper")}
      >
        next
      </button>

      {modal && (
        <AgreementModal
          modalProp={modal}
          toggleModalProp={toggleModal}
          onFormSwitch={(val) => onFormSwitch(val)}
        />
      )}

      <ScrollDialog
        open={open}
        scroll={scroll}
        handleClose={handleClose}
        dialogTitle="User Agreement"
        desc="Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua."
        defaultBtn="reject"
        successBtn="accept"
        onFormSwitch={() => onFormSwitch(1)}
      >
        <div className="modal-contents">
          <button className="close-modal" onClick={handleClose}>
            X
          </button>
        </div>
      </ScrollDialog>
    </>
  );
}

export default PhoneNumber;
