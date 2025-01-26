const Order = require('../models/order');

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
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

