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
