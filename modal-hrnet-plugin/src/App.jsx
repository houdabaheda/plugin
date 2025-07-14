import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Ouvrir la modale</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} message="Ceci est un test de modale !" />
    </div>
  );
}

export default App;
