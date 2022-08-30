import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCampus, addCampusThunk } from '../store/reducers/campusReducer'

function CampusSideView(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleImageUrl = (event) => {
        setImageUrl(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, address)
        addCampusThunk({ name, address, description, imageUrl })(dispatch)
    }

    return (
        <>
            <div className='campus-side-view-container'>
                <h1 className='sideview-header'>Add New Campus</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Campus Name:
                        <input onChange={handleName} type='text' name='name' placeholder='Campus Name' />
                    </label>
                    <label>
                        Address:
                        <input onChange={handleAddress} type='text' name='address' placeholder='Address' />
                    </label>
                    <label>
                        Description: - can be empty
                        <textarea onChange={handleDescription} type='text' rows="4" cols="50" name='description' placeholder='Description' />
                    </label>
                    <label>
                        Image Url: - can be empty
                        <input onChange={handleImageUrl} type='text' name='imageUrl' placeholder='Image Url' />
                    </label>
                    <span><button type='submit'>CREATE</button>
                        <button onClick={() => props.setTorf(!props.torf)}>Back</button></span>
                </form>

            </div>
        </>
    )
}

export default CampusSideView