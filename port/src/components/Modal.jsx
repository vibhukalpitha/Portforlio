import React from 'react'

export default function Modal({ onClose, src }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <img src={src} alt="Profile large" className="modal-img" />
      </div>
    </div>
  )
}
