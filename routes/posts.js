const {getPostsSchema, getPostSchema} = require('../controllers/schemas/posts');
const {getPostsHandler,getPostHandler} = require('../controllers/handlers/posts');

const opts = {
    schema: getPostsSchema,
    handler: getPostsHandler
  };

const getPostOpts = {
  schema: getPostSchema,
  handler: getPostHandler,
  preHandler: async (request, reply) => {
    console.log('preHandler for /api/posts/:id route executed');
  } 
};

const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts',opts);
    fastify.get('/api/posts/:id', getPostOpts);
    done();
}

module.exports = postRoutes;