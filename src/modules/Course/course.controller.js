import Course from '../../../DB/Models/course.db.js';

// ========================================= Add Course ================================//

/**
 * destructuring data from the request body
 * create new document in the database
 * return the response
 */

export const addCourse = async (req, res) => {
  // 1- destructuring data from the request body
  const { title, description, image, startDate, endDate, price } = req.body;

  // 2- create new document in the database
  const course = await Course.create({
    title,
    description,
    image,
    startDate,
    endDate,
    price,
  });

  // 3- return the response
  return res.status(201).json({
    message: 'Course added successfully',
    success: true,
    course,
  });
};

// ========================================= Get Course ================================//

/**
 * find all courses
 * check if courses is empty
 * return the response
 */

export const getCourse = async (req, res) => {
  // 1- find all courses
  const course = await Course.find();

  // 2- check if courses is empty
  if (!course.length) {
    return res.status(404).json({
      success: false,
      message: 'courses is empty',
    });
  }

  // 3- return the response
  return res.status(200).json({
    message: 'success',
    success: true,
    course,
  });
};

// ========================================= Get Course ================================//

/**
 * destructuring data from the request params
 * get the course from the database by id
 * check if course not found
 * return the response
 */

export const getSpecificCourse = async (req, res) => {
  // 1- destructuring data from the request params
  const { id } = req.params;

  // 2- get the course from the database by id
  const course = await Course.findById(id);

  // 3- check if course not found
  if (!course) {
    return res.status(404).json({
      message: 'Course not found',
      success: false,
    });
  }

  // 4- return the response
  return res.status(200).json({
    message: 'success',
    success: true,
    course,
  });
};

// ========================================= update Course ================================//

/**
 * destructuring data from the request body
 * destructuring id from the request params
 * find and update the course from the database by id
 * check if course not found
 * return the response
 */

export const updateCourse = async (req, res) => {
  // 1- destructuring data from the request body
  const { title, description, image, startDate, endDate, price } = req.body;
  // 2- destructuring id from the request params
  const { id } = req.params;

  // 3- find and update the course from the database by id
  const course = await Course.findByIdAndUpdate(
    id,
    {
      title,
      description,
      image,
      startDate,
      endDate,
      price,
    },
    { new: true }
  );

  // 4- check if course not found
  if (!course) {
    return res.status(404).json({
      message: 'Course not found',
      success: false,
    });
  }

  // 4- return the response
  return res.status(200).json({
    message: 'success',
    success: true,
    course,
  });
};

// ========================================= delete Course ================================//

/**
 * destructuring data from the request params
 * delete the course from the database by id
 * return the response
 */

export const deleteCourse = async (req, res) => {
  // 1- destructuring data from the request params
  const { id } = req.params;

  // 2- delete the course from the database by id
  const course = await Course.deleteOne({ _id: id });

  if (!course.deletedCount) {
    return res.status(404).json({
      message: 'error in deleting course',
      success: false,
    });
  }

  // 3- return the response
  return res.status(200).json({
    message: 'success',
    success: true,
  });
};
