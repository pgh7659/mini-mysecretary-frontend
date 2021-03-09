import http from '../http';

const testService = {
  getList: () => {
    const today = new Date().toLocaleDateString('fr-ca');
    const register = 'ghpark';

    return http.get(`/api/todos?date=${today}&register=${register}`);
  },
};

export default testService;
