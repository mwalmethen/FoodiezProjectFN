import instance from "./axios";

// get all categories
async function getAllCategories() {
  const response = await instance.get("/categories");
  console.log(response);
  return response;
}
// create new category
async function addCategory(formData) {
  console.log(formData);
  const response = await instance.post("/categories", formData);
  console.log("addCategory", response);
  return response.data;
}

export { getAllCategories, addCategory };
