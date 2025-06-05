const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Przechwyć wszystkie pozostałe żądania i oddaj index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'App'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
