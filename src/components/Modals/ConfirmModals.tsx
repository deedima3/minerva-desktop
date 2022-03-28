import React, { useState } from 'react'
import Modal from './Modal'


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div>Other Content</div>
    </>
  )
}