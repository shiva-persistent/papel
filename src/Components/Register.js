import React, { useState } from "react";
import AccountInfo from "./UI/AccountInfo";
import CategoryInfo from "./UI/CategoryInfo";
import CurrencyInfo from "./UI/CurrencyInfo";
import PhoneNumber from "./UI/PhoneNumber";
import SmsOtp from "./UI/SmsOtp";

const Register = () => {
  const [currentForm, setCurrentForm] = useState(0);

  const toggleForm = (formName) => {
    console.log(formName);
    setCurrentForm((prev) => (prev = formName));
  };
  return (
    <>
      <div className="lyt__container">
        <div className="max__width">
          {currentForm === 0 && <PhoneNumber onFormSwitch={toggleForm} />}
          {currentForm === 1 && <SmsOtp onFormSwitch={toggleForm} />}
          {currentForm === 2 && <CurrencyInfo onFormSwitch={toggleForm} />}
          {currentForm === 3 && <CategoryInfo onFormSwitch={toggleForm} />}
          {currentForm === 4 && <AccountInfo onFormSwitch={toggleForm} />}
        </div>
      </div>
    </>
  );
};
export default Register;
