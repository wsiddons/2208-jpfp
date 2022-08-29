import React from 'react'

function StudentList() {
    const students = [{
        firstName: 'Carl',
        lastName: 'Wheezer',
        imgUrl: 'https://lastfm.freetls.fastly.net/i/u/ar0/a771c29d9ee82c2e9455211bddcc5a84.jpg',
        email: 'carlWheezer420@gmail.com',
        gpa: 2.3
    }, {
        firstName: 'Jimmy',
        lastName: 'Neutron',
        imgUrl: 'https://www.looper.com/img/gallery/things-only-adults-notice-in-jimmy-neutron/intro-1602679825.jpg',
        email: 'jN00t69@gmail.com',
        gpa: 4.0
    }, {
        firstName: 'Sheen',
        lastName: 'Estevez',
        imgUrl: 'https://pbs.twimg.com/media/CtFNnScUAAEXdgQ.jpg',
        email: 'dummythickskull12@gmail.com',
        gpa: 1.2
    }
    ]

    return (
        <div className='student-list'>
            <h1>Student List</h1>
            <div className='student-container'>
                {students.map((student) =>
                    <div className='student-card'>
                        <h1>{`${student.firstName} ${student.lastName}`}</h1>
                        <img src={student.imgUrl} width='200px' />
                        <h3>Email: {student.email}</h3>
                        <h3>GPA: {student.gpa}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default StudentList