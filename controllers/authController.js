import * as authService from "../services/auth.js"

export const login = async function (req, res, next) {
	try {
		const {body: data} = req

		const login = await authService.otherLogin(data)
		
		res.status(200).send({ 
			message: "Login successful", 
			data: login 
		})
	} catch (error) {
		next(error)
	}
}