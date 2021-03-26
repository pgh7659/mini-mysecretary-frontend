import http from '../http';

const todoService = {
  getList: (date) => http.get(`/api/todos?date=${date}`),
  save: (todo) => http.post('/api/todos', { ...todo }),
  updateDone: (id, done) => http.put(`/api/todos/${id}`, { done: done }),
  delete: (id) => http.delete(`/api/todos/${id}`),
};

export default todoService;
