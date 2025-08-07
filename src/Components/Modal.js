import React from 'react';
import '../App.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
