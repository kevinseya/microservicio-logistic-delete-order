const Order = require('../models/order');
const { v4: uuidv4, validate: validateUUID } = require('uuid');

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        if (!validateUUID(orderId)) {
            return res.status(400).json({ error: 'Invalid UUID format' });
        }

        // Buscar la orden y actualizar el estado active a false
        const updatedOrder = await Order.update(
            { active: false }, 
            { where: { orderId } }
        );

        if (updatedOrder[0] === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }

        return res.status(200).json({ message: 'Order marked as inactive' });
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting order' });
    }
};

