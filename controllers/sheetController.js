  
const { google } = require('googleapis');

exports.readSheet = async (req, res) => {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
  auth.setCredentials({ access_token: req.user.googleToken });
  
  const sheets = google.sheets({ version: 'v4', auth });
  try {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: req.body.spreadsheetId,
      range: req.body.range,
    });
    res.json(result.data.values);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// More functions like writeSheet, createWorkflow can be added
