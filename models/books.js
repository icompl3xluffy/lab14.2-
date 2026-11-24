import mongoose from "mongoose";


const BookSchema = new mongoose.Schema({
title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true },
  publishedDate: { type: Date },
  inStock: { type: Boolean, default: true },
})