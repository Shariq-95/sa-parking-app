import React, { useState } from 'react';

const AddTodo = ({addTodo, count, setCount}) => {

    const [driver, setDriver] = useState("");
    const [numberplate, setNumberplate] = useState("");
    const [entry, setEntry] = useState("");
    const [exit, setExit] = useState("");
    const submit= (e)=> {
        e.preventDefault();
        if(!driver || !numberplate ||!entry ||!exit){
            alert("Fields cannot be empty");
        }
        else {
        addTodo(driver, numberplate, entry, exit);
        setDriver("");
        setNumberplate("");
        setEntry("");
        setExit("");
        }
    }

    return (
        <div className="parkingbg container">
            <h3>Add a Parking Detail</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="driver" className="form-label">Driver's Name</label>
                    <input type="text" value={driver} onChange={(e)=>{setDriver(e.target.value)}} class="form-control" id="driver" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="numberplate" className="form-label">Number Plate</label>
                    <input type="text" value={numberplate} onChange={(e)=>{setNumberplate(e.target.value)}} class="form-control" id="numberplate" />
                </div>
                <div className="mb-3">
                    <label htmlFor="entry" className="form-label">Entry Time</label>
                    <input type="datetime-local" value={entry} onChange={(e)=>{setEntry(e.target.value)}} class="form-control" id="entry"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exit" className="form-label">Exit Time</label>
                    <input type="datetime-local" value={exit} onChange={(e)=>{setExit(e.target.value)}} class="form-control" id="exit"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success" onClick={() => setCount(parseInt(count) + 1)}>Add Parking</button>
            </form>
        </div>
    )
}

export default AddTodo
