import React from 'react'

// Icons
import { Icon } from '@iconify/react'
import successIcon from '@iconify/icons-mdi/checkbox-marked-circle-outline'
import failureIcon from '@iconify/icons-mdi/close-circle-outline'

// CSS styles
import './styles.css'

// Interfaces
interface FeedbackModalProps {
  status: "success" | "error",
  message: string,
  onCloseModal: (...params: any[]) => void
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ status, message, onCloseModal }) => {
  return (
    <div className="modal-wrapper">
      <div onClick={onCloseModal} className="modal-backdrop"></div>
      <div className="feedback-modal">
        <div className={status}>
          <Icon icon={status === "success" ? successIcon : failureIcon} />
        </div>
        <p>{message}</p>
        <button onClick={onCloseModal}>Ok</button>
      </div>
    </div>
  )
}

export default FeedbackModal
