const Order = require('../models/order');
const { v4: uuidv4, validate: validateUUID } = require('uuid');

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        
        // Validate that orderId is a valid UUID
        if (!validateUUID(orderId)) {
            return res.status(400).json({ error: 'Invalid UUID format' });
        }

        // Attempt to delete order
        const deletedOrder = await Order.destroy({ where: { orderId } });
        if (deletedOrder === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ message: 'Failed to delete order' });
    }
};

