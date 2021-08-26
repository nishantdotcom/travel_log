import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./index.css";
import { createLogEntry } from "./API";

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      console.log(created);
      onClose();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}

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
      <button disabled={loading}>
        {loading ? "Loading.." : "Create Entry."}
      </button>
    </form>
  );
};

export default LogEntryForm;
