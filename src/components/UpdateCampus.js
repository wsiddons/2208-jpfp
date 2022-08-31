import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function UpdateCampus() {
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
        // addCampusThunk({ name, address, description, imageUrl })(dispatch)
    }
    return (
        <>
            <div className='update-campus-container'>

                <form onSubmit={handleSubmit}>
                    <h2>Update Campus</h2>
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
                    <button type='submit'>Update Campus</button>

                </form>

            </div>
        </>
    )
}

export default UpdateCampus