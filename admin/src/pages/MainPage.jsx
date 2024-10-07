import { useEffect, useState } from "react";
import CoffeForm from "../components/CoffeForm";
import useRequest from "../hooks/useRequest";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function MainPage() {
  const {
    response,
    error,
    loading: fetchLoading,
  } = useFetch({ url: "https://crudapi.co.uk/api/v1/coffees", method: "GET" });
  const { requestFunction, loading: requestLoading } = useRequest({
    url: "https://crudapi.co.uk/api/v1/coffees",
    method: "POST",
  });
  const { requestFunction: deleteFunction } = useRequest({ method: "DELETE" });
  const coffeList =
    response?.items.map((coffe) => {
      return {
        coffeName: coffe.coffeName,
        coffePrice: Number(coffe.coffePrice),
        coffeDescription: coffe.coffeDescription,
        coffeId: coffe._uuid,
      };
    }) || [];
  const onDelete = (coffeId) => {
    deleteFunction(null, `https://crudapi.co.uk/api/v1/coffees/${coffeId}`);
  };
  const onFormSubmit = (coffeName, coffePrice, coffeDescription) => {
    requestFunction([{ coffeName, coffeDescription, coffePrice }]);
  };
  if (fetchLoading || requestLoading) return <p>Loading . . . </p>;
  return (
    <div>
      <CoffeForm onFormSubmit={onFormSubmit} />
      {coffeList.map((coffe) => {
        return (
          <div key={coffe.coffeId} style={{ border: "1px solid gray" }}>
            <h1>Name:{coffe.coffeName}</h1>
            <h2>Description:{coffe.coffeDescription}</h2>
            <h3>Price:{coffe.coffePrice}$</h3>
            <Link to={`http://localhost:5173/edit/${coffe.coffeId}`}>Edit</Link>
            <button onClick={() => onDelete(coffe.coffeId)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
