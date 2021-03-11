import http from '../http';

const register = 'ghpark'; // 로그인 구현 후 변경

const todoService = {
  getList: (date) => http.get(`/api/todos?date=${date}&register=${register}`),
  save: (todo) => http.post('/api/todos', { ...todo, register: register }),
  updateDone: (id, done) => http.put(`/api/todos/${id}`, { done: done }),
  delete: (id) => http.delete(`/api/todos/${id}`),
};

export default todoService;
