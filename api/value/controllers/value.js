'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async findByArray(ctx) {
    console.log('ok');
    let entities;
    let response;
    console.log('query', ctx.query);
    if (ctx.query._q) {
      entities = await strapi.services.value.search(ctx.query);
    } else {
      entities = await strapi.services.value.find(ctx.query);
    }
    response = entities.map(obj => obj.value);

    return  response;
  }
};
