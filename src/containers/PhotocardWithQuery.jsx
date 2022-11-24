import React from "react";
import { useParams } from "react-router-dom";
import PhotoCard from "../Components/Photocard/Photocard";

import { useGetPhotoWithQuery } from "../hooks/useGetPhotoWithQuery";
const PhotoCardWithQuery = () => {
  let { id } = useParams();
  const { loading, error, data } = useGetPhotoWithQuery(id);

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <a href="/">BACK</a>
      <PhotoCard {...data.photo} />
    </>
  );
};
export default PhotoCardWithQuery;
