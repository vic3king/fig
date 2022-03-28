import Joi from '@hapi/joi';
import joiFormatter from '../helpers/joi-formatter';

const eventValidation = async (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    end: Joi.string(),
    start: Joi.string(),
    address: Joi.string(),
    description: Joi.string(),
    title: Joi.string(),
    isVirtual: Joi.bool(),
    category: Joi.string(),
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

export default eventValidation;
