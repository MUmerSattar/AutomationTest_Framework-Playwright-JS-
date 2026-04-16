export default {
getUser() {
    return {
      firstName: 'Automation',
      lastName: 'Test',
      email: `automated${Date.now().toString().slice(-5)}@test.com`,
      phone: '5086222330',
      password: 'Test@123'
    };
  },

  validUser: {
    email: 'automationuser@sample.com',
    password: 'Test@123'
  },

  invalidUser: {
    email: 'wrong@test.com',
    password: 'wrong123'
  }
};