import { TodoTask } from "../models/todoTask.js"
import { ConflictError, NotFoundError } from '../errors/index.js';


export const getAllForUser = async (userId) => {
	const tasks = await TodoTask.find({user: userId})
    return tasks
}

export const create = async (userId, data) => {
    const task = new TodoTask({
        title: data.title,
        content: data.content,
        deadline: data.deadline,
        user: userId
    })

    await task.save()
    return task
}
export async function update(userId, data) {
    let task  = await TodoTask.findById({_id:userId });
    if (!task ) throw new NotFoundError('task  not found');
  
    task = await TodoTask.updateOne({ _id: userId},data );
    return task;
  }
  
  export async function deleteTask( userId){
    let task  = await TodoTask.findById({ _id: userId });
         if (!task ) throw new NotFoundError('task  not found');
    task = await TodoTask.deleteOne({_id: userId });
    return task;
}