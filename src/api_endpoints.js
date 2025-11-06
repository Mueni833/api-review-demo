// User management API endpoints (stub)
// GET /users, POST /users, GET /users/:id, PUT /users/:id, DELETE /users/:id

export function listUsers(req, res) {
  res.status(200).json([]);
}

export function createUser(req, res) {
  res.status(201).json({ id: 1, ...req.body });
}
