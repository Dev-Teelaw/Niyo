import joi from 'joi';
import { validationOption } from './index.js';

export function validateCreateUser(req) {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return schema.validate(req.body, validationOption);
}

export function validateLogin(req) {
	const schema = joi.object({
	  email: joi.string().email().required(),
	  password: joi.string().required()
	})
    
	return schema.validate(req.body, validationOption)
  }
  