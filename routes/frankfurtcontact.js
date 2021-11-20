const express = require('express')
const { 
  createFrankfurtcontact
        } = require('../controller/frankfurtcontact')
const FrankfurtContact = require('../models/Frankfurtcontact') 


const router = express.Router({mergeParams: true})

//const { protect, authorize } = require('../middleware/auth') 
const advancedResults = require('../middleware/advancedResult')        

//router.use(protect)
//router.use(authorize('admin'))

router
.route('/')
//.get(advancedResults(User), getUsers)   
.post(createFrankfurtcontact)

router
.route('/:id')
/**
 * .get(getUser)
   .put(updateUser)
   .delete(deleteUser)
 */

module.exports = router;