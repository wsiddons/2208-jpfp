import React from 'react'

function CampusList() {

    const campuses = [{
        id: 1,
        name: 'Lehigh University',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Alumni_Memorial_Building_Lehigh_University.jpg/240px-Alumni_Memorial_Building_Lehigh_University.jpg',
        address: '27 Memorial Dr W, Bethlehem, PA 18015',
        description: 'Lehigh University is a private research university in Bethlehem, Pennsylvania in the Lehigh Valley region of eastern Pennsylvania. The university was established in 1865 by businessman Asa Packer and was originally affiliated with the Episcopal Church.'
    }, {
        id: 2,
        name: 'University of Southern California',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Doheny.jpg/220px-Doheny.jpg',
        address: 'Los Angeles, CA 90007',
        description: 'The University of Southern California (USC, SC, or Southern Cal[a]) is a private research university in Los Angeles, California. Founded in 1880 by Robert M. Widney, it is the oldest private research university in California.[11][12]'
    }, {
        id: 3,
        name: 'University of California, Los Angeles',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Royce_Hall_post_rain.jpg/220px-Royce_Hall_post_rain.jpg',
        address: 'Los Angeles, CA 90095',
        description: 'The University of California, Los Angeles (UCLA)[13] is a public land-grant research university in Los Angeles, California. UCLA’s academic roots were established in 1881 as a teachers college then known as the southern branch of the California State Normal School (now San José State University). This school was absorbed with the official founding of UCLA as the Southern Branch of the University of California in 1919, making it the second-oldest of the 10-campus University of California system (after UC Berkeley).'
    }]

    return (
        <div className='campus-list'>
            <h1>Campus List</h1>
            <div className='campus-container'>
                {campuses.map((campus) =>
                    <div key={campus.id} className='campus-card'>
                        <h1>{campus.name}</h1>
                        <img src={campus.imgUrl} />
                        <h2>Address:</h2>
                        <h3>{campus.address}</h3>
                        <p>{campus.description}</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CampusList