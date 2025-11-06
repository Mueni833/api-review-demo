// BEFORE Optimization
async function getUserOrders(userId, db) {
  const orders = await db.query("SELECT * FROM orders");
  return orders.filter(order => order.user_id === userId);
}

module.exports = { getUserOrders };
