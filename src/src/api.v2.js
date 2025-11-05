// src/api.v2.js
// New API endpoints (simulated)

// Existing-style data
const store = [
  { id: 1, name: "Catherine", active: true },
  { id: 2, name: "John", active: false }
];

export function getUsers() {
  return [...store];
}

export function getUserById(id) {
  if (id == null) return null;
  return store.find(u => u.id === Number(id)) || null;
}

// NEW ENDPOINTS
export function createUser(payload) {
  if (!payload || !payload.name) {
    throw new Error("Invalid payload: 'name' is required");
  }
  const id = store.length ? Math.max(...store.map(u => u.id)) + 1 : 1;
  const user = { id, name: String(payload.name), active: !!payload.active };
  store.push(user);
  return user;
}

export function updateUser(id, updates = {}) {
  const idx = store.findIndex(u => u.id === Number(id));
  if (idx === -1) return null;
  const current = store[idx];
  const next = {
    ...current,
    ...(updates.name != null ? { name: String(updates.name) } : {}),
    ...(updates.active != null ? { active: !!updates.active } : {})
  };
  store[idx] = next;
  return next;
}

export function deleteUser(id) {
  const idx = store.findIndex(u => u.id === Number(id));
  if (idx === -1) return false;
  store.splice(idx, 1);
  return true;
}

export function getActiveUsers() {
  return store.filter(u => u.active);
}
