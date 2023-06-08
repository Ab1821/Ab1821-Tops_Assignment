import React, { useState } from 'react';

function IncAndDec(props) {
    const [count, setCount] = useState(0)

    const btnDec = () => {
        setCount(count - 1)
    }
    const btnInc = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div className="container mt-5 d-flex">
                <div className="row">
                    < div className="col">
                        <h1 className='count mt-10' >{count}</h1>
                        <br />          <br />
                        <button className='btn btn-primary' onClick={btnDec}> Decrement </button>
                        <button className='btn btn-info ' onClick={btnInc}> Increment </button>
                    </div>
                </div >
            </div >
        </>
    );
}

export default IncAndDec;