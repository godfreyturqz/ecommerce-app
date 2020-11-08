import React from 'react'
import loading from './loading.gif'
import './styles.css'

function Loading() {
    return (
        <div className="container-loading">
            <img src={loading} alt="loading..."/>
        </div>
    )
}

export default Loading
