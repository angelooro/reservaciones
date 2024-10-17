import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HotelLista from "./components/HotelLista";
import { Route } from "wouter";
import HotelDetalles from "./components/HotelDetalles";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Route path="/" component={HotelLista} />
      
      <Route path="/hotel/:id" component={HotelDetalles} /> 
    </QueryClientProvider>
  );
}

export default App;
