import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./Component/Form/Form";
import Frame from "./Component/Frame/Frame";

function App() {
  const [playlist, setPlaylist] = useState([]);
  console.log(playlist);

  const handleSubmit = (formData) => {
    fetch("http://localhost:1955/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPlaylist((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
      fetch("http://localhost:1955/api/playlist", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setPlaylist(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  }, []);

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      {playlist.length && <Frame playlist={playlist} />}
    </div>
  );
}
export default App;
