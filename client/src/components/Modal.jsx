import React from 'react'

const Modal = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return (
        <>
            <div className={`modal fade ${isOpen ? 'show' : ''}`}  aria-hidden={!isOpen} style={{ backgroundColor: '#020202b0', display: isOpen ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered"  >
                    <div className="modal-content ">
                        <div className="modal-header " style={{ border: 'none' }}>
                            <h1 className="modal-title fs-4 text-center" >{title}</h1>
                            <button type="button" className="btn-close" onClick={onChange} aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <div className='text-center '>
                                {description}
                            </div>
                            <div className=' my-4'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
