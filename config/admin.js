module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b27bc026708a3f6727a47ac1772e0172'),
  },
});
