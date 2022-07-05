
const Student = require("../Models/studentsModel");

/**
 * get all students
 * @param {*} req 
 * @param {*} res 
 */
const getAllStudents = async (req, res) =>{

  let data = await Student.find();
    res.render('index', { data : data });
}



/**
 * get single students
 * @param {*} req 
 * @param {*} res 
 */
const getSingleStudent = async (req, res) =>{


    let id = req.params.id;
    let data = await Student.findById(id)
   

    res.render('view' , { data : data });
}


/**
 * get single students
 * @param {*} req 
 * @param {*} res 
 */
const showStudentForm = (req, res) =>{
    res.render('create');
}

const updateStudent = async (req, res) =>{
   let id = req.params.id;
   let update_id = await Student.findById(id);
   res.render('edit',{
    update_id : update_id
   })
}

/**
 * update student data
 * @param {*} req 
 * @param {*} res 
 */
const editStudent = async(req, res) => {
   
    let id = req.params.id

    let fileName = req.body.photo
    console.log(req.body)
    if(req.file){
        fileName = req.body.filename
    }
    await Student.findByIdAndUpdate(id, { ...req.body,
    photo : fileName
    }, {
        new : true
    })
    res.redirect('/students')
} 

/**
 * delete student data
 * @param {*} req 
 * @param {*} res 
 */
const deleteStudent = async (req, res) => {
    let id = req.params.id;
    await Student.findByIdAndDelete(id);
    res.redirect('/students')
}

/**
 * get single students
 * @param {*} req 
 * @param {*} res 
 */
const createStudent = async (req, res) =>{
    // sent data to db
 await  Student.create({
    ...req.body,
    photo : req.file.filename
 });

   res.redirect('/students')
}



module.exports = {
    getAllStudents,
    createStudent,
    getSingleStudent,
    showStudentForm,
    editStudent,
    deleteStudent,
    updateStudent
  
}