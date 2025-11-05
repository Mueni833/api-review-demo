// src/api.js
// Initial basic API simulation

export function getUsers() {
  return [
    { id: 1, name: "Catherine" },
    { id: 2, name: "John" }
  ];
}

export function getUserById(id) {
  const users = getUsers();
  return users.find(user => user.id === id) || null;
}
