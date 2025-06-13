import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 

// Ustalanie __dirname przy użyciu ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Zdefiniuj catch-all route z nazwanym segmentem
app.get('/:pathMatch(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
