const express = require('express');
const { getAllUser, getUserByGender, getUserByAge, getUserBetweenAge } = require('../controller/UserController');
const router = express.Router();

router.get('/all/users',getAllUser)
router.get('/users/gender/:gender',getUserByGender)
router.get('/users/age/:age',getUserByAge)
router.get('/users/age/between/:start/:end',getUserBetweenAge)



module.exports = router;