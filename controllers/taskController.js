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
export async function update(req, res, next) {
	try {
	  let {
		body: data,
		params: { id: taskId},
	  } = req;
  
	  const task = await taskService.update(taskId, data);
  
	  res.status(200).json({
		message: 'Task updated successfully',
		data: task,
	  });
	} catch (error) {
		next(error)
	}
  }
  export async function deleteTask(req, res, next) {
	try {
		let {

			params: { id: taskId},
		  } = req;
  
	  const task = await taskService.deleteTask(taskId);
  
	  res.status(200).json({
		message: 'Task deleted successfully',
		data: task,
	  });
	} catch (error) {
		next(error)
	}
  }
