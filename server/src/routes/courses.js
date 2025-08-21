//
export default (fastify) => {
  fastify.get("/courses", (req, res) => {
    res.send({ courses: [] });
  });
}
