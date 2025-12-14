type Recipe = {
  title: string;
  ingredients: string[];
  instructions: string[];
};

export function renderRecipeEmail(recipe: Recipe) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h1>${recipe.title}</h1>

      <h2>Ingredients</h2>
      <ul>
        ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
      </ul>

      <h2>Instructions</h2>
      <ol>
        ${recipe.instructions.map((s) => `<li>${s}</li>`).join("")}
      </ol>
    </div>
  `;
}

export function renderRecipeHTML(recipe: Recipe) {
  return `
    <html>
      <head>
        <title>${recipe.title}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            color: #222;
          }

          h1 {
            font-size: 28px;
            margin-bottom: 10px;
          }

          h2 {
            margin-top: 30px;
          }

          ul, ol {
            margin-left: 20px;
          }

          li {
            margin-bottom: 8px;
          }
        </style>
      </head>

      <body>
        <h1>${recipe.title}</h1>

        <h2>Ingredients</h2>
        <ul>
          ${recipe.ingredients.map((i) => `<li>${i}</li>`).join("")}
        </ul>

        <h2>Instructions</h2>
        <ol>
          ${recipe.instructions.map((s) => `<li>${s}</li>`).join("")}
        </ol>
      </body>
    </html>
  `;
}
