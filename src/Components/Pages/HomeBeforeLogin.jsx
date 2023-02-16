import React from "react";
import Carousal from "../Carousal/Carousal";
import TRANSACTION from "../../images/icons/transaction.png";

function HomeBeforeLogin() {
  return (
    <>
      <div className="mr__b__xl">
        <Carousal />
      </div>

      <div className="dis__container text__center mr__b__xl">
        <div className="dis__container">
          <h5 className="header__title mr__b__lg">Quick Transactions</h5>
        </div>
        <div className="dis__container">
          <div className="dis__flex j__c__c quick__trans">
            <div className="flex__auto">
              <figure>
                <img src={TRANSACTION} width="60" alt="TRANSACTION" />
                <figcaption>Receive & Send Money</figcaption>
              </figure>
            </div>
            <div className="flex__auto">
              <figure>
                <img src={TRANSACTION} width="60" alt="TRANSACTION" />
                <figcaption>Deposit or Check</figcaption>
              </figure>
            </div>
            <div className="flex__auto">
              <figure>
                <img src={TRANSACTION} width="60" alt="TRANSACTION" />
                <figcaption>Invoice Payment</figcaption>
              </figure>
            </div>
            <div className="flex__auto">
              <figure>
                <img src={TRANSACTION} width="60" alt="TRANSACTION" />
                <figcaption>RQR Code Transactions</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="mr__b__xl" style={{ position: "relative", height: "500px" }}>
        <img
          src="https://images.unsplash.com/photo-1563187867-2cd158d07999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          width="100%"
          height="100%"
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt="banner"
        />
        <button className="campaigns">See all campaingns</button>
      </div>

      <div className="mr__b__sm">
        <div className="dis__container mr__b__md">
          <h5 className="header__title mr__b__sm">Papel Shops Near You</h5>
          <p className="sub__header__title">Discover business using Papel POS</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          alt="map"
          width="100%"
          height={400}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </>
  );
}

export default HomeBeforeLogin;
