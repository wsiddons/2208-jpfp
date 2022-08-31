import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateCampus, updateCampusThunk } from '../store/reducers/campusReducer'

function UpdateCampus() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState(0)
    const params = Number(useParams().id)


    const state = useSelector(state => state.campuses)

    const campusFilter = state.filter(campus => campus.id === params)
    useEffect(() => {
        setId(campusFilter[0].id)
    }, [])

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
        console.log(name, address, description, imageUrl)
        updateCampusThunk({ name, address, description, imageUrl, id })(dispatch)
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