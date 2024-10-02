import "./App.css";
import CoffeForm from "./components/CoffeForm";

function App() {
  const onFormSubmit = (coffeName, coffePrice, coffeDescription) => {
    fetch("/api/v1/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify([{ coffeName, coffePrice, coffeDescription }]),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <CoffeForm onFormSubmit={onFormSubmit} />
    </>
  );
}

export default App;
