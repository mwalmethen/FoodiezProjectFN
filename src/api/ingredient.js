import instance from "./axios";

async function getAllIngredients() {
  const response = await instance.get("/foodiez/api/ingredients");
  console.log(response);
  return response;
}
async function updateIngredientById(id, updatedData) {
  try {
    const response = await instance.put(
      `/foodiez/api/ingredients/${id}`,
      updatedData
    );
    console.log(response.data); // Log the updated data for debugging
    return response.data; // Return the updated ingredient data
  } catch (error) {
    console.error("Error updating ingredient:", error);
    throw error; // Ensure the error is caught elsewhere
  }
}
async function addIngredient(data) {
  const response = await instance.post("/foodiez/api/ingredients", data);
  console.log("addIngredient", response);
  return response;
}
async function deleteIngredient(id) {
  const response = await instance.delete(`/foodiez/api/ingredients/${id}`);
  console.log("deleteIngredient", response);
  return response;
}

export {
  getAllIngredients,
  updateIngredientById,
  deleteIngredient,
  addIngredient,
};
