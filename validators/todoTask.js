import joi from 'joi';
import { validationOption } from './index.js';

export function validateCreate(req) {
  const schema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    deadline: joi.date().max(Date.now())
  });

  return schema.validate(req.body, validationOption);
}
  