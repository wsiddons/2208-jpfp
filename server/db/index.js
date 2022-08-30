// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const students = [{
  firstName: 'Carl',
  lastName: 'Wheezer',
  email: 'carlWheezer420@gmail.com',
  gpa: 2.3,
  campusId: 1
}, {
  firstName: 'Jimmy',
  lastName: 'Neutron',
  email: 'jN00t69@gmail.com',
  gpa: 4.0,
  campusId: 1
}, {
  firstName: 'Sheen',
  lastName: 'Lopez',
  email: 'dummythickskull12@gmail.com',
  gpa: 1.2,
}
]

const campuses = [{
  name: 'Lehigh University',
  address: '27 Memorial Dr W, Bethlehem, PA 18015',
  description: 'Lehigh University is a private research university in Bethlehem, Pennsylvania in the Lehigh Valley region of eastern Pennsylvania. The university was established in 1865 by businessman Asa Packer and was originally affiliated with the Episcopal Church.'
}, {
  name: 'University of Southern California',
  address: 'Los Angeles, CA 90007',
  description: 'The University of Southern California (USC, SC, or Southern Cal[a]) is a private research university in Los Angeles, California. Founded in 1880 by Robert M. Widney, it is the oldest private research university in California.[11][12]'
}, {
  name: 'University of California, Los Angeles',
  address: 'Los Angeles, CA 90095',
  description: 'The University of California, Los Angeles (UCLA)[13] is a public land-grant research university in Los Angeles, California. UCLA’s academic roots were established in 1881 as a teachers college then known as the southern branch of the California State Normal School (now San José State University). This school was absorbed with the official founding of UCLA as the Southern Branch of the University of California in 1919, making it the second-oldest of the 10-campus University of California system (after UC Berkeley).'
}]

const syncAndSeed = async () => {
  await db.sync({ force: true });
  await Promise.all(campuses.map(campus => {
    return Campus.create(campus);
  }));
  await Promise.all(students.map(student => {
    return Student.create(student);
  }));

  //use this area to sync your database

  console.log(`
    Seeding successful!
  `);
};



module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,

}