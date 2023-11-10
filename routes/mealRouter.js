const Router = require('express')
const router = new Router()
const mealController = require('../controllers/mealController')



router.post('/', mealController.create)
router.get('/', mealController.getAll)
router.get('/:id', mealController.getOne)


module.exports = router