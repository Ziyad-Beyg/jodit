import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <section
      style={{
        maxWidth: "800px",
        height: "50vh",
        margin: "0 auto",
      }}
    >
      {/* <Typewriter /> */}
      <TextEditor />
    </section>
  );
}

export default App;
