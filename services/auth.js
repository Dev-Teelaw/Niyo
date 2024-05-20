import bcrypt from "bcrypt"
import {User} from "../models/user.js"
import { BadRequestError } from "../errors/index.js"
import jwt from 'jsonwebtoken'
import serverConfig from "../config/serverConfig.js"


export const otherLogin = async (data) => {
	const user = await User.findOne({ email: data.email })
	if (!user) throw new BadRequestError('Invalid email or password')

	const isValidPassword = await bcrypt.compare(data.password, user.password)
	if (!isValidPassword) throw new BadRequestError('Invalid email or password')

	const {password, ...userWithoutPassword} = user.toObject()
	const token = generateAuthToken(userWithoutPassword)
	return { user: userWithoutPassword, accessToken: token }
}

export const generateAuthToken = (userWithoutPssword) => {
	const token = jwt.sign(userWithoutPssword, serverConfig.jwtSecret, { expiresIn: '15m' });
	return token;
};

