import { createRoot } from "react-dom/client";
import "@presentation/styles/main.css";
import { MainContainer } from "@presentation/containers";

createRoot(document.getElementById("root")!).render(<MainContainer className="min-w-screen min-h-screen" />);
