import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { AddNew } from "../../store/menu/api_actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

  return (
    <div className="add-form" style={{paddingTop: "120px", paddingBottom: "80px"}}>
        <Helmet title="Add form" />
        <div className="container bg-light p-4" >
      <h1>Add new meal</h1>
      <Formik
        initialValues={{
          title: "",
          desc: "",
          img: "",
          price: 0,
          ingredient: "",
        }}
        onSubmit={async (values) => {
          console.log("Form>>", values)
          dispatch(AddNew(values))
          toast.success("New meal added, enjoy!")
          navigate('/')
        }}
      >
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Title"
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="ingredient">Ingredients</label>
            <Field
              id="ingredient"
              name="ingredient"
              placeholder="Ingredients"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="desc">Description</label>
            <Field
              id="desc"
              name="desc"
              placeholder="Description"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="img">Image URL</label>
            <Field
              id="img"
              name="img"
              placeholder="Image URL"
              className="form-control"
            />
            <small id="imgHelp" class="form-text text-muted">
              Paste the url of the image here.
            </small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="price">Price</label>
            <Field
              id="price"
              name="price"
              placeholder="price"
              className="form-control"
              type="number"
              min="0"
            />
          </div>

          <button className="btn btn-dark" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
    </div>
  );
};

export default Add;
