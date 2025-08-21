import './Modal.css'
import { createPortal } from "react-dom";

function Modal ({ children }) {
  return  createPortal (
    <div className="modal">
       { children } {/*creamos un portal para renderizar el modal fuera del div raiz*/}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal };