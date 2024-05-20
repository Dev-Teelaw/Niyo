import { User } from '../models/user.js';

const checkIfUserExists = async (field, value) => {
	const userExists = await User.findOne({ [field]: value })

	if (userExists) return { status: "error", code: 400, message: `${field} already exists` }
	return null
}

export const createUser = (data, file) => {
	return new Promise(async (resolve, reject) => {
		const error = await checkIfUserExists("email", data.email)
		if (error) return reject(error)

		if (!data.password)
			return reject({
				status: "error",
				code: "400",
				message: "Password field can not be empty",
			})

		let newUser = new User({
			fullName: data.fullName,
			email: data.email,
			password: await User.hashPassword(data.password)
			
		})
        try {
			await newUser.save()
			resolve(newUser)
		} catch (error) {
			reject({ status: "error", code: 500, message: error })
		}
	})
}
		
    
		
	
