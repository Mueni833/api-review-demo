// tests/api.v2.test.js
// Simple illustrative tests (review purpose).
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getActiveUsers,
} from "../src/api.v2.js";

describe("API v2 basic behavior", () => {
  test("returns users and finds by id", () => {
    const users = getUsers();
    expect(Array.isArray(users)).toBe(true);
    expect(getUserById(1)).not.toBeNull();
  });

  test("create + update + delete flow", () => {
    const created = createUser({ name: "Alice", active: true });
    expect(created.name).toBe("Alice");

    const updated = updateUser(created.id, { active: false });
    expect(updated.active).toBe(false);

    const removed = deleteUser(created.id);
    expect(removed).toBe(true);
  });

  // NOTE: no explicit empty-input edge case here (good spot for QA review)
});
