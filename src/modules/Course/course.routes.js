import { Router } from 'express';
import * as courseController from './course.controller.js';
import expressAsyncHandler from 'express-async-handler';
import { validationMiddleware } from '../../middlewares/validation.middleware.js';
import { addCourseSchema, deleteAndGetSpecificCourseSchema, updateCourseSchema } from './course.validation.js';

const router = Router();

router.post('/', validationMiddleware(addCourseSchema), expressAsyncHandler(courseController.addCourse));
router.get('/', expressAsyncHandler(courseController.getCourse));
router.get('/:id', validationMiddleware(deleteAndGetSpecificCourseSchema), expressAsyncHandler(courseController.getSpecificCourse));
router.put('/:id', validationMiddleware(updateCourseSchema), expressAsyncHandler(courseController.updateCourse));
router.delete('/:id', validationMiddleware(deleteAndGetSpecificCourseSchema), expressAsyncHandler(courseController.deleteCourse));

export default router;
