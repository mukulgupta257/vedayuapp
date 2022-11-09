const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		purchaseDate: {
			type: String,
			required: true,
			unique: false,
		},
		name: {
			type: String,
			required: true,
			unique: false,
		},
		email: {
			type: String,
			required: true,
			unique: false,
		},
		items: [
			{
				productId: {
					type: String,
					required: true,
					unique: false
				},
				imageURL: {
					type: String,
					required: true,
					unique: false
				},
				title: {
					type: String,
					required: true,
					unique: false
				},
				qty: {
					type: Number,
					required: true,
					unique: false
				},
				db_price: {
					type: Number,
					required: true,
					unique: false
				},
				salePrice: {
					type: Number,
					required: true,
					unique: false
				},
				color: {
					type: String,
					required: true,
					unique: false
				}
			},
		],
		coupon_info: {
			type: Object,
			required: false
		},
		awb_id: {
			type:String,
			required: false
		},
		deliveryStatus: {
			type: String,
			required: true,
			unique: false
		},
		address: {
			type: Object,
			required: true,
			unique: false
		},
		transactionId: {
			type: String,
			required: false,
			unique: false
		},
		orderId: {
			type: String,
			required: false,
			unique: false
		},
		paymentStatus: {
			type: String,
			required: true,
			unique: false
		},
		message: {
			type: String,
			unique: false
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Order", orderSchema);;
