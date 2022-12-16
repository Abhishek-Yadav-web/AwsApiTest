const Users =  require('../json/UserData.json');

const getAllUser = (req,res) => {
    res.json({
        sucess: true,
        users : Users
    })
}

const getUserByGender = (req,res) => {
    const gender = req.params.gender
    res.json({
        sucess: true,
        users : Users.users.filter(user => {
            if(user.gender === gender){
                return user
            }
        })
    })
} 

const getUserByAge = (req,res) => {

    const age = req.params.age
    console.log(Users.users.filter(user => {
        if(user.age === age){
            return user
        }
    }));
    
    res.json({
        sucess: true,
        users : Users.users.filter(user => {
            if(user.age === Number(age)){
                return user
            }
        })
    })
} 

const getUserBetweenAge = (req,res) => {
    const {start,end} = req.params

    res.json({
        sucess: true,
        users : Users.users.filter(user => {
            if(user.age >= Number(start) && user.age <= Number(end)){
                return user
            }
        })
    })
} 



module.exports = {getAllUser,getUserByGender,getUserByAge,getUserBetweenAge} 