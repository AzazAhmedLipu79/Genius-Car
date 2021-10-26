import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      const boom = res.data?.insertedId;
      if (boom) {
        alert("Success");
        reset();
      }
    });
  };

  return (
    <div className="container-fluid p-0 ">
      <h2>Add Service</h2>
      <form
        className="py-5  pt-5 pb-5 d-grid row bg-danger justify-content-md-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="Service Name" {...register("name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="Service Discription" {...register("discription")} />

        {/* errors will return when field validation fails  */}
        {/* {errors?.exampleRequired && <span>This field is required</span>} */}
        <input placeholder="Price" type="number" {...register("price")} />

        <input
          type="url"
          placeholder="Service Image Url"
          {...register("image")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
