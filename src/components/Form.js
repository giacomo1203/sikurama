import React from 'react';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { createSong, editSong } from "../api/post.js";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Form() {
  const location = useLocation();
  const navigate = useNavigate();

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const tmpSong = location?.state?.song;
    if (tmpSong) reset(tmpSong);
  }, []);


  const onSubmit = (data) => {
    if (Object.values(errors).length) return;
    if (isLoading) return;

    let today = new Date();
    let formatedDate = today.toISOString().split('T')[0];

    data.date_creation = formatedDate;

    setIsLoading(true);
    if (data.id) {
      editSong(data).then((response) => {
        console.log('Edited====> ', response);
        if (response) navigate("/home");
        setIsLoading(false);
      });
    } else {
      createSong(data).then((response) => {
        console.log('Created====> ', response);
        if (response) navigate("/home");
        setIsLoading(false);
      });
    }
  }

  return (
    <>
      <div className='form'>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" {...register("title", {required: true, maxLength: 80})} />

          <label htmlFor="category">Categoría</label>
          <input type="text" id="category" {...register("category", {required: true, maxLength: 100})} />

          <label htmlFor="author">Autor</label>
          <input type="text" id="author" {...register("author", {required: true, maxLength: 100})} />

          <label htmlFor="numbers">Numerofonía</label>
          <textarea id="numbers" {...register("numbers", {required: true})} />

          <label htmlFor="lyrics">Letras</label>
          <textarea id="lyrics" {...register("lyrics", {required: true})} />

          <label htmlFor="media">Media ID</label>
          <input type="text" id="media" {...register("media", {required: true, maxLength: 100})} />

          <label htmlFor="public">Publicar</label>
          <select id="public" {...register("public", { required: true })}>
            <option value="1">Sí</option>
            <option value="0">No</option>
          </select>

          <label htmlFor="training">Se ensaya</label>
          <select id="training" {...register("training", { required: true })}>
            <option value="1">Sí</option>
            <option value="0">No</option>
          </select>

          <input type="submit" value={isLoading ? 'Registrando' : 'Guardar'} />
        </form>
      </div>
    </>
  );
}
