import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Służy do konwersji URL modułu na ścieżkę pliku

// Najpierw przekształcamy import.meta.url na __filename...
const __filename = fileURLToPath(import.meta.url);
// ...następnie wyznaczamy katalog, w którym znajduje się ten plik
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Przechwyć wszystkie pozostałe żądania i oddaj index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
