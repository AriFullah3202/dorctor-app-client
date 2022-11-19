import React from 'react'

const ConfirmationModal = ({ title, message, closeModal, onSuccess, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => onSuccess(modalData)} htmlFor="confirmation-modal" className="btn">Delete</label>
                        <button className="btn btn-outline" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal
