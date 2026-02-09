const { Order, OrderItem, Product, User } = require("../models");

exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    console.log("ORDER REQUEST:", { userId: req.user.id, items, totalAmount });
    
    // Check if user exists
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found. Please log in again." });
    }

    const order = await user.createOrder({
      totalAmount
    });

    const itemsToCreate = [];
    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (!product) {
        return res.status(400).json({ 
          message: `Product with ID ${item.productId} not found. Please clear your cart and add it again.` 
        });
      }
      itemsToCreate.push({
        OrderId: order.id,
        ProductId: item.productId,
        quantity: item.quantity,
        size: item.size,
        color: item.color
      });
    }

    // Bulk create order items for better performance and safety
    await OrderItem.bulkCreate(itemsToCreate);

    res.status(201).json(order);
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    res.status(500).json({ message: "Failed to create order", error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { UserId: req.user.id },
      include: [
        {
          model: Product,
          through: { attributes: ["quantity", "size", "color"] }
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.json(orders);
  } catch (error) {
    console.error("GET ORDERS ERROR:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
