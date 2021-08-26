import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";

const LogEntryForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      <label htmlFor="title" required>
        Title
      </label>
      <input {...register("title")} />
      <label htmlFor="comments">Commments</label>
      <textarea {...register("comments")} rows={3}></textarea>
      <label htmlFor="comments">Description</label>
      <textarea {...register("description")} rows={3}></textarea>
      <label htmlFor="image">Image</label>
      <input {...register("image")} />

      <label htmlFor="visitDate">visit Date</label>
      <input {...register("visitDate")} type="date" />
      <button>Create Log Entry</button>
    </form>
  );
};

export default LogEntryForm;
