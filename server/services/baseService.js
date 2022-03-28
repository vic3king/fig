/**
 * @class BaseService
 */
export default class BaseService {
  /**
   * @method constructor
   * @param {object} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @method create
   * @description
   * @param {object} dataObject
   * @returns {object} created object
   */
  async create(dataObject) {
    return this.model.create(dataObject);
  }

  /**
   * @method find
   * @param {object} missingObject
   * @returns {object} found object
   */
  async find(missingObject) {
    return this.model.findOne(missingObject);
  }

  /**
   * @method find
   * @param {object} missingObject
   * @returns {object} found object
   */
  async findAll(missingObject) {
    return this.model.find(missingObject);
  }

  /**
   * @method update
   * @param {*} whereObject
   * @param {*} dataObject
   * @returns {object} updated row
   */
  async update(whereObject, dataObject) {
    return this.model.updateOne(whereObject, dataObject).exec();
  }

  /**
   * @method update
   * @param {*} whereObject
   * @param {*} dataObject
   * @returns {object} updated row
   */
  async findOneAndUpdate(whereObject, dataObject) {
    return this.model.findOneAndUpdate(whereObject, dataObject, {
      new: true,
    });
  }
}
