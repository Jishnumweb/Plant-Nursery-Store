import React from 'react'

function Filter() {
    return (
        <div className='mb-[100px] col-md-12 col-sm-12'>
            <div className="input ">
                <button className="value">
                    <svg className="normal" viewBox="0 0 24 24">
                    </svg>
                    indoor plants
                </button>
                <button className="value">
                    <svg className="normal" viewBox="0 0 24 24">
                    </svg>
                    outdoor plants
                </button>
                <button className="value mr-5">
                    <svg viewBox="0 0 24 24" className="normal">
                    </svg>
                    fruit plants
                </button>
            </div>
        </div>
    )
}

export default Filter
