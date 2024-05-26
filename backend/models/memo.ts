import mongoose from "mongoose";

const memoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: "" },
    content: { type: String, required: true, default: "" },
    background: { type: String, required: true, default: "var(--gray5-color)" },
  },
  {
    timestamps: true,
  },
);

const Memo = mongoose.models["Memo"] || mongoose.model("Memo", memoSchema);

export default Memo;
