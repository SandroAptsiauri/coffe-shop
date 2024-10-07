import React from "react";
import CoffeForm from "../components/CoffeForm";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

export default function EditPage() {
  const { coffeId } = useParams();
  const navigate = useNavigate();
  const { requestFunction } = useRequest({
    url: `https://crudapi.co.uk/api/v1/coffees/${coffeId}`,
    method: "PUT",
  });
  const { response, loading, error } = useFetch({
    url: `https://crudapi.co.uk/api/v1/coffees/${coffeId}`,
    method: "GET",
  });
  const onSubmit = (coffeName, coffePrice, coffeDescription) => {
    requestFunction({ coffeName, coffePrice, coffeDescription })
      .then(() => navigate("/"))
      .catch((err) => alert(err));
  };
  if (loading && !response) return <p>Loading . . .</p>;
  if (error || !response) return <p>{error}</p>;
  return (
    <div>
      <CoffeForm
        onFormSubmit={onSubmit}
        coffeName={response.coffeName}
        coffePrice={response.coffePrice}
        coffeDescription={response.coffeDescription}
      />
    </div>
  );
}
