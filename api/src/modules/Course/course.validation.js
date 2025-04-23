import Joi from 'joi';
import { Types } from 'mongoose';

//============== object Id validator =============== //

const objectIdValidation = (value, helper) => {
  const isvalid = Types.ObjectId.isValid(value);
  return isvalid ? value : helper.message('invalid objectId');
};

//============== Add Course validator =============== //

export const addCourseSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string(),
    startDate: Joi.date(),
    endDate: Joi.date(),
    price: Joi.number().required(),
  }),
};

//============== Delete and Get Specific Course validator =============== //

export const deleteAndGetSpecificCourseSchema = {
  params: Joi.object({
    id: Joi.string().custom(objectIdValidation).required(),
  }),
};

//============== Update Course validator =============== //

export const updateCourseSchema = {
  body: Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    startDate: Joi.date(),
    endDate: Joi.date(),
    price: Joi.number(),
  }),
  params: Joi.object({
    id: Joi.string().custom(objectIdValidation).required(),
  }),
};
