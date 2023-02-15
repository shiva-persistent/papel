import React, { useEffect, useState } from "react";
import { Circle } from "rc-progress";

const SmsOtp = ({ onFormSwitch }) => {
  const [percentCount, setPercentCount] = useState(60);
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
        setPercent(prev => prev - (100 / 60));
      if(percentCount === 0) setPercent(0)
    }, 1000);
    return () => clearInterval(interval);
  }, [percent]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setPercentCount(prev => prev - 1);
      if(percentCount === 0) setPercentCount(0)
    }, 1000);
    return () => clearInterval(interval);
  }, [percentCount]);

  return (
    <>
      <h4 className="header__title">Sign Up</h4>

      <div className="dis__container__sm mr__b__md mr__t__sm">
        <div className="dis__flex__sm j__c__sb a__i__c">
          <div className="flex__col__sm">
            <div className="dis__flex__sm a__i__c">
              <div className="flex__auto__sm">
                <Circle
                  width={30}
                  percent={percent}
                  strokeWidth={6}
                  strokeColor="#22979c"
                  trailColor="#d5d5d5"
                />
              </div>
              <div className="flex__auto__sm">
                <p className="modal__summary">Remaining Time</p>
                <p>{percentCount === 0 ? '0:00' : `0:${percentCount}`}</p>
              </div>
            </div>
          </div>
          <div className="flex__auto__sm">
            <button className="btn__primary">send again</button>
          </div>
        </div>
      </div>

      <p className="desc__text mr__b__md">
        Enter the SMS Verification code sent to your phone number:{" "}
        <span className="mobile__sms">0(530) 123 45 67</span>
      </p>

      <div className="dis__container__sm mr__b__xl">
        <div className="dis__flex__sm a__i__c">
          <div className="flex__col__sm">
            <input type="text" maxLength={1} />
          </div>
          <div className="flex__col__sm">
            <input type="text" maxLength={1} />
          </div>
          <div className="flex__col__sm">
            <input type="text" maxLength={1} />
          </div>
          <div className="flex__col__sm">
            <input type="text" maxLength={1} />
          </div>
          <div className="flex__col__sm">
            <input type="text" maxLength={1} />
          </div>
          <div className="flex__col__sm">
            <input type="text" maxLength={1} />
          </div>
        </div>
      </div>

      <button className="btn__cancel mr__b__sm" onClick={() => onFormSwitch(0)}>
        cancel
      </button>
      <button className="btn__next" onClick={() => onFormSwitch(2)}>
        next
      </button>
    </>
  );
};
export default SmsOtp;
