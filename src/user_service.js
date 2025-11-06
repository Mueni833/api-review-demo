/**
 * Fetch a user by id.
 * @param {number|string} userId - The user identifier.
 * @returns {{ok: boolean, data?: object, error?: string}} Result object with either data or error.
 */
export function getUser(userId) {
  if (userId == null || userId === '') {
    return { ok: false, error: 'Missing userId' };
  }
  // Fake payload for demo
  return { ok: true, data: { id: userId, name: 'Demo User' } };
}

// Intentionally missing docstring — you'll flag this in review.
export function listUsers(limit = 50) {
  const size = Number(limit) > 0 ? Number(limit) : 50;
  return { ok: true, data: Array.from({ length: size }, (_, i) => ({ id: i + 1 })) };
}
