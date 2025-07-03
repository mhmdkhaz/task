// src/App.tsx
import { DirectionProvider } from "@radix-ui/react-direction";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./components/common/ScrollToTop";
import RoutesComponent from "./routes/Routes";
import { useLocaliztionStore } from "./store/useLocaliztionStore";

export default function App() {
  const { direction } = useLocaliztionStore();

  return (
    <div dir={direction}>
      <DirectionProvider dir={direction}>
        <ScrollToTop />
        <RoutesComponent />
        <ToastContainer />
      </DirectionProvider>
    </div>
  );
}