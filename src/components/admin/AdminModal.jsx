import React from "react";
import ReactDom from "react-dom";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function AdminModal({ open, children, onClose }) {
    if (!open) return null;

    return ReactDom.createPortal(
        <div className="modal">
            <div className="overlay-style">
                <div className="modal-style">
                    <CancelRoundedIcon className="close-button" onClick={onClose} />
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}