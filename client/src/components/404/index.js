import React from 'react'

function PageNotFound() {
    const style = {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "height": "100%",
        "flexDirection": "column"
    }
    const linkStyle = {
        "background": "#1d3557",
        "padding": "10px",
        "margin": "10px"
    }
    return (
        <div style={style}>
            <h1>404. Page not found</h1>
            <p>The requested URL could not be found.</p>
            <a href="/" style={linkStyle}>Go back to homepage</a>
        </div>
        
    )
}

export default PageNotFound
