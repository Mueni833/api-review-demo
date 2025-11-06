// Minimal notifications module (intentionally includes a console.log for review)

export function sendInAppNotification(userId, message) {
  if (!userId || !message) {
    return { ok: false, error: "Missing userId or message" };
  }
  // TODO: integrate real queue/push here
  console.log("[debug] sending notification to", userId, message); // <- will be flagged
  return { ok: true };
}

// export function legacyNotify(u, m) { /* old path, commented out intentionally */ }
