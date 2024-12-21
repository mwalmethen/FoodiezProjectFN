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

async function likeRecipe(likedData) {
  try {
    let { id, review } = likedData;
    console.log("likedData ", likedData);
    console.log("review", likedData.review);
    console.log("review", likedData.id);

    const response = await instance.put(`/recipes/like/${id}`, { review });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("error Like recipe", error);
    throw error;
  }
}

export { getAllRecipes, updateRecipeById, addRecipe, deleteRecipe, likeRecipe };
