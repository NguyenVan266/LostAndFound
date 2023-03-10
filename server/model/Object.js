const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const ObjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
    },
    listImg: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    detail: {
      type: String,
    },
    category: {
      type: Number,
      enum: [
        1, // Học liệu ( sách vở, đồ dùng học tập,...)
        2, // Đồ dùng cá nhân giá trị thấp (Áo khoác, bình nước cá nhân, …)
        3, // Đồ dùng cá nhân giá trị cao ( Điện thoại, chuột máy tính, lap, ..)
        4, // Đồ vật tính nhận diện xác định ( Thẻ sv, ví, cmnd,…)
        5, // Đồ vật khó nhận diện cho người ngoài ( Thẻ xe, chìa khóa,..)
        6, // Đồ vật khác
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", ObjectSchema);
