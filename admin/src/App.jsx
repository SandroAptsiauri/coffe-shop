import "./App.css";
import CoffeForm from "./components/CoffeForm";

function App() {
  const onFormSubmit = (coffeName, coffePrice, coffeDescription) => {
    fetch("https://crudapi.co.uk/api/v1/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer bA7pU5Ya746cdu5EKskHs9iv6ezk79SC3lO0F38S1TXz7moeLA`,
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
