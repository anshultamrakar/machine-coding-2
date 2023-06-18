import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [show, setShow] = useState(false);
    const [habbits , setHabbits] = useState([
        {
          id : 1 , 
          name : "Start Exercising" 
        }, 
        {
            id : 2 , 
            name : "Start Meditating" 
        }
    ])
    const [habbitName , setHabbitName] = useState("")
    const [repeat , setRepeat] = useState("")
    const [goal , setGoal] = useState("")
    const [date , setDate] = useState("")
    const [time , setTime] = useState("")


    const handleSaveHabbit = (habbit) => {
        const id = habbits.length ? habbits[habbits.length - 1].id + 1 : 1;
        const myNewHabbit= {id , habbit}
        const listHabbit = [...habbits, myNewHabbit]
        setHabbits(listHabbit)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        +
      </Button>
      <ul>
      {habbits.map(habbit => (
       <li key = {habbit.id}>
          <p>{habbit.name}</p>
       </li>
      ))}
      </ul>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>New Habbit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className='modlaForm'>
                <label htmlFor='name'>Name* </label>
                <input id = "name" type = "text" placeholder='Enter name' autoComplete='off' value = {habbitName} onChange={(e) => setHabbitName(e.target.value)}  />
                <label htmlFor='repeat'>Repeat</label>
                <select id="repeat" onChange={(e) => setRepeat(e.target.value)} >
                    <option value = {repeat} >Daily</option>
                    <option  value = {repeat}>Weekly</option>
                    <option  value = {repeat} >Bi -Weekly</option>
                </select>
                <label htmlFor='goal'>Goal</label>
                <select id="goal"  onChange={(e) => setGoal(e.target.value)} >
                    <option value = {goal}>1 time a day</option>
                    <option value = {goal} >2 time a day</option>
                    <option value = {goal} >3 time a day</option>
                </select>
            
                <label htmlFor='time'>Time of Day</label>
                <select id="time" onChange={(e) => setTime(e.target.value)}  >
                    <option value = {time}>Any Time</option>
                    <option value = {time}>Evening</option>
                    <option value = {time}>Morning</option>
                </select>
                  
            
                <label htmlFor='date'>Start Date</label>
                <select id="date"  onChange={(e) =>setDate(e.target.value) }>
                    <option value = {date} >Today</option>
                    <option value = {date} >Tommorow</option>
                    <option value = {date} >From Saturday</option>
                </select>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveHabbit("new Value")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Home