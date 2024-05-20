import * as user from "../models/user.js"
import * as userService from "../services/user.js"

export const createUser = async (req, res, next) => {
	let { error } = user.validateUser(req.body)
	if (error) throw { status: "error", code: 400, message: error.details[0].message }

	const newUser = await userService.createUser(req.body, req.file)
	next({ status: "success", data: newUser })
}