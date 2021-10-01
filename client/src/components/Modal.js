import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {

    const renderModal = () => {

        return (
            <div onClick={props.onDismiss} className="ui dimmer modals visible active">
                <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                    <i className="close icon" onClick={props.onDismiss}></i>
                    <div className="header">{props.title}</div>
                    <div className="content">
                        {props.content}
                    </div>
                    <div className="actions">
                        {props.actions}
                    </div>
                </div>
            </div>
        )
    }


    return ReactDOM.createPortal(renderModal(), document.querySelector('#modal'));
};

export default Modal;