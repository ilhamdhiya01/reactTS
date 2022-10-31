import api from '../../constant/api';
export const getAllTodoById =  async (id: number) => api.get(`taskById/${id}`).then((data) => data.data).catch((error) => console.log(error));
export const deleteByTaskId =  async (id: number) => api.delete(`delete/${id}`).then((data) => data.data).catch((error) => console.log(error));