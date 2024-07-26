// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App;
