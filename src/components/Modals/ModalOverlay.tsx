import React from 'react'

interface Overlay {
    children : JSX.Element;
 }

const ModalOverlay = ({children} : Overlay) => {
    return (
        <div className={`absolute bottom-0 right-0 top-0 left-0 bg-black flex justify-center items-center z-60 bg-opacity-40`}>
            {children}
        </div>
    )
}

export default ModalOverlay