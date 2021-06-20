'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RefreshToken', [
      {
        id: 1,
        refreshToken: await bcrypt.hash('dsfsdf', 12),
        UserId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RefreshToken', null, {});
  },
};
