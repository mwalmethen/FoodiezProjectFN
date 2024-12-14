import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/style.css";
import "../css/RegistrationForm.css";
// Validation Schema
const validationSchema = Yup.object({
  categoryName: Yup.string()
    .required("Category Name is required")
    .min(3, "Category Name must be at least 3 characters"),
  image: Yup.mixed()
    .required("Image is required")
    .test("fileFormat", "Unsupported file format", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      );
    }),
});

const CategoryForm = () => {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      image: null, // Initially, no file is selected
    },
    validationSchema,
    onSubmit: (values) => {
      // Form submission logic
      const formData = new FormData();
      formData.append("categoryName", values.categoryName);
      formData.append("image", values.image);

      console.log("Form Values:", values);

      // Example of sending form data to backend (adjust to your backend setup)
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // }).then(response => response.json()).then(data => console.log(data));
    },
  });

  return (
    <>
      <div>
        <h1 className="headline2">Add A Category </h1>
      </div>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="categoryName">Category Name</label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              onChange={formik.handleChange}
              value={formik.values.categoryName}
            />
            {formik.touched.categoryName && formik.errors.categoryName ? (
              <div className="error-message">{formik.errors.categoryName}</div>
            ) : null}
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="error-message">{formik.errors.image}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="Formik-button">
            <button type="submit">Add Category</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryForm;
