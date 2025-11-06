// Null-safe helpers for user profile

export function getDisplayName(user) {
  // Safely read and normalize the name
  const name = user?.profile?.name?.trim();
  if (!name) return 'Guest';
  return name.toUpperCase();
}

export function updateBio(user, newBio) {
  // Guard against missing profile before updating
  if (!user?.profile) {
    return { ok: false, error: 'No profile found' };
  }
  user.profile.bio = (newBio ?? '').toString();
  return { ok: true };
}
