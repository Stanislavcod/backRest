const Router = require('express')
const router = new Router()

const mealRouter = require('./mealRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/meal', mealRouter)
router.use('/type', typeRouter)
// router.use('/basket', basketRouter)


module.exports = router