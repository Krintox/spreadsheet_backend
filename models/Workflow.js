  
const mongoose = require('mongoose');

const WorkflowSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  spreadsheetId: { type: String, required: true },
  automationRules: { type: Object }, // Example for custom workflows
});

module.exports = mongoose.model('Workflow', WorkflowSchema);
