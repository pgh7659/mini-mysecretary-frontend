import http from '../http';

const today = new Date().toLocaleDateString('fr-ca');
const register = 'ghpark'; // 로그인 구현 후 변경

const todoService = {
  getList: () => http.get(`/api/todos?date=${today}&register=${register}`),
  save: (todo) => http.post('/api/todos', { ...todo, register: register }),
  updateDone: (id, done) => {
    console.log(done);
    return http.put(`/api/todos/${id}`, { done: done });
  },
  delete: (id) => http.delete(`/api/todos/${id}`),
};

export default todoService;
