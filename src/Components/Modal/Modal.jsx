import React, { useState } from 'react';
import './Modal.css';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="modal-container">
            <button className="open-modal-btn" onClick={openModal}>
                Open Modal
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div 
                        className="modal" 
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button className="close-icon" onClick={closeModal}>
                            &times;
                        </button>
                        <h2>Enhanced Modal</h2>
                        <p>
                            This is an enhanced modal with smooth animations and additional features.
                        </p>
                        <button className="close-modal-btn" onClick={closeModal}>
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
