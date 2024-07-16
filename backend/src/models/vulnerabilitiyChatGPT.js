// models/VulnChatGPT.js

const mongoose = require('mongoose');

const VulnChatGPTSchema = new mongoose.Schema({
  auditId: { type: mongoose.Schema.Types.ObjectId, ref: 'Audit' },
  name: String,
  description: String,
  severity: String,
  // Add other fields as necessary
  createdAt: { type: Date, default: Date.now }
});

const VulnChatGPT = mongoose.model('VulnChatGPT', VulnChatGPTSchema);
module.exports = VulnChatGPT;

