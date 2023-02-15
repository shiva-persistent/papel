import React from "react";
import "./Modal.css";

export default function Modal({ modalProp, toggleModalProp }) {

    return (
        <>
            <div className="modal">
                <div className="overlay" onClick={() => toggleModalProp(!modalProp)}></div>
                <div className="modal-content">
                    <h4 className="modal__header">User Agreement</h4>
                    <div className='dis__container'>
                        <h5>Membership Created!</h5>
                        <p className="modal__summary">Start using Papel now...</p>
                        <button className='btn__success' onClick={() => toggleModalProp(!modalProp)}>start using papel!</button>
                    </div>
                </div>
            </div>
        </>
    );
}