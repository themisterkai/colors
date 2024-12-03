import express, { Request, Response } from 'express';
import { getPalette } from './colorThief';

const app = express();
// const img =
// 'https://lh3.googleusercontent.com/Ckjq-HkB2XhEsbuMsei0MR5fLTODfkcXY8qQTG-XLHVxE0jLO9DnSYaVE8n1kCrcm9AMKzoWB2w03LrY0v7eoj5hYw=s0';
const img =
  'https://dutchmuseumgiftshop.nl/wp-content/uploads/2023/09/s0031V1962-18.jpg';

const getHTML = (palette: [number, number, number][]) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Color Palette</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .palette {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          .color-box {
            width: 100px;
            height: 100px;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }
        </style>
      </head>
      <body>
        <h1>Extracted Color Palette</h1>
        <div class="palette">
          ${palette
            .map(
              color =>
                `<div class="color-box" style="background-color: rgb(${color.join(
                  ','
                )});"></div>`
            )
            .join('')}
        </div>
      </body>
      </html>
    `;
};

app.get('/', async (request: Request, response: Response) => {
  const palette = await getPalette(img);
  // response.send(`<h1>Hello World!</h1><p>${palette}`);
  response.send(getHTML(palette));
});

// app.get('/api/notes', (request, response) => {
//   response.json(notes)
// })

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
