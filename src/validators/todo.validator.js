import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const todoValidator = (req, res, next) => {
    const schema = Joi.object({
        Title: Joi.string().min(4).required(),
        Description: Joi.string().min(4).required(),
        Status: Joi.string().optional()


    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
    else {

        next();
    }
};