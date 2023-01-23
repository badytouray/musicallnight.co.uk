import React from 'react'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo bg-light text-dark text-center" style={{ height: '30px' }}>
        M.A.N @2023
        <a
          className="btn btn-primary btn-lg btn-floating"
          style={{ backgroundColor: '#ac2bac' }}
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer
