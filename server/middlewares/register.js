import Joi from '@hapi/joi';
import joiFormatter from '../helpers/joi-formatter';

const registerValidation = async (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9]{8,30}$/),
  });

  const { error } = schema.validate(body);

  if (error) {
    const { message } = error.details[0];
    const formattedMessage = joiFormatter(message);
    return res.status(400).send({
      status: false,
      error: formattedMessage,
    });
  }

  return next();
};

export default registerValidation;
