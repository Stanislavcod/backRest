const uuid = require('uuid')
const path = require('path')
const {Meal} = require('../models/models')
const ApiError = require('../error/ApiError')

class MealController {
    async create(req, res, next) {

        try {
            const {name, price, description, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const meal = await Meal.create({name, price, typeId, description, img: fileName})

            return res.json(meal)
        } catch (e) {
            console.log(req.files)
            next(ApiError.badRequest(e.message))
        }


    }

    async getAll(req, res) {
        let { typeId } = req.query;
        let meals;
        if (typeId) {
            meals = await Meal.findAll({ where: { typeId } });
        }
        if (!typeId) {
            meals = await Meal.findAll();
        }
        return res.json(meals);
    }

    async getOne(req, res) {
        const {id} = req.params
        const meal = await Meal.findOne({
            where: {id}
        })
        return res.json(meal)
    }
}

module.exports = new MealController()