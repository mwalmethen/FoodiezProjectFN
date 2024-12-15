import instance from "./axios";

// get all categories
async function getAllCategories() {
  const response = await instance.get("/categories");
  console.log(response);
  return response;
}
// create new category
async function addCategory(data) {
  const response = await instance.post("/categories", data);
  console.log("addCategory", response);
  return response;
}

export { getAllCategories, addCategory };
