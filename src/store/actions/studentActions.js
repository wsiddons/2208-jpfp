import axios from "axios";

export const fetchStudents = async () => {
    const request = await axios.get('/api/students')
    console.log(request.data)
    return request.data
}
// fetchStudents()