import * as taskService from "../services/task.js"

export const index = async function (req, res, next) {
	try {
		const {user: {_id: userId}} = req

		const tasks = await taskService.getAllForUser(userId)
		
		res.status(200).send({ 
			message: "All tasks retrieved successfully", 
			data: tasks 
		})
	} catch (error) {
		next(error)
	}
}

export const create = async function (req, res, next) {
	try {
		const {user: {_id: userId}, body: data} = req

		const task = await taskService.create(userId, data)
		
		res.status(200).send({ 
			message: "Task created successfully", 
			data: task
		})
	} catch (error) {
		next(error)
	}
}
export const update= async function (req, res, next) {
	try {
		const {user: {_id: userId}, body: data} = req

		const task = await taskService.update(userId, data)
		
		res.status(200).send({ 
			message: "Task updated successfully", 
			data: task
		})
	} catch (error) {
		next(error)
	}
}

export const deleteTask = async function (req, res, next) {
	try {
		const {user: {_id: userId}, body: data} = req

		const task = await taskService.deleteTask(userId, data)
		
		res.status(200).send({ 
			message: "Task deleted successfully", 
			data: task
		})
	} catch (error) {
		next(error)
	}
}