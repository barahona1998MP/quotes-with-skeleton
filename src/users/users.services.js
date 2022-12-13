const usersControllers = require('./users.controllers')

//? Get, Post

const getAllUsers = (req, res) => {
    usersControllers.finAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.findUserById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getMyUser = (req, res) => {
    const id = req.user.id
    usersControllers.findUserById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postUser = (req, res) => {
    const {firstName, lastName, email, password, gender, birthday} = req.body
    usersControllers.createUser({firstName, lastName, email, password, gender, birthday})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({
                message: err.message,
                fields: {
                    firstName: 'String',
                    lastName: 'String',
                    email: 'example@example.com',
                    password: 'String',
                    gender: 'String',
                    birthday: 'YYYY/MM/DD',
                }
            })
        })
}

//? Este servicio estara protegido solo admins pueden ejecutarlo
const patchUser = (req, res) => {
    const id = res.params.id
    const {firstName, lastName, email, gender, birthday, role, status} = req.body
    usersControllers.updateUser(id, {firstName, lastName, email, gender, birthday, role, status})
        .then(data => {
            if(data) {
                res.status(200).json({message: `User edited succesfully with id ${id}`})
            } else {
                res.status(404).json({meesage: `User with id: ${id}, not found`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


const pathcMyUser = (req, res) => {
    const id = req.user.id 
    const {firstName, lastName, gender, birthday} = req.body
    usersControllers.updateUser(id, {firstName, lastName, gender, birthday})
        .then(() => {
            res.status(200).json({message: 'Your user was edited succesfully'})
        })
        .cath(err => {
            res.status(400).json({message: err.message})
        })
}

//? Este servicio estara protegido solo admins pueden ejecutarlo
const deleteUser = (req, res) => {
    const id = req.params.id
    usersControllers.deleteUser(id)
        .then(data => {
            if(data) {
                res.status(204).json()
            } else {
                res.status(404).json({message: `User with id: ${id}, not found`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deleteMyUser = (req, res) => {
    const id = req.user.id
    usersControllers.deleteUser(id)
        .then(() => {
            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllUsers,
    getMyUser,
    getUserById,
    postUser,
    patchUser,
    pathcMyUser,
    deleteUser,
    deleteMyUser
}