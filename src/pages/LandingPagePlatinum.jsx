import React from 'react'

const LandingPagePlatinum = () => {
  return (
     <iframe
      src="/landing/index.html"
      title="Landing Page"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        zIndex: 9999,
      }}
    ></iframe>
  )
}

export default LandingPagePlatinum