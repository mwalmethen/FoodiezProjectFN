import instance from "./axios";

async function getAllRecipes() {
  const response = await instance.get("/recipes");
  console.log(response);
  return response;
}
async function updateRecipeById(id, updatedData) {
  try {
    const response = await instance.put(`/recipes${id}`, updatedData);
    console.log(response.data); // Log the updated data for debugging
    return response.data; // Return the updated ingredient data
  } catch (error) {
    console.error("Error updating ingredient:", error);
    throw error; // Ensure the error is caught elsewhere
  }
}
async function addRecipe(formData) {
  const response = await instance.post("/recipes", formData);
  console.log("addRecipe", response);
  return response;
}
async function deleteRecipe(id) {
  const response = await instance.delete(`/recipes/${id}`);
  console.log("deleteRecipe", response);
  return response;
}
export { getAllRecipes, updateRecipeById, addRecipe, deleteRecipe };
