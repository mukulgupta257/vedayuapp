const mongoose = require("mongoose");

const categoryListSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
        isActive: {
			type: Boolean,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("CategoryList", categoryListSchema);;
