import { ApolloProvider } from "@apollo/client";
import RouterOutlet from "./Routes";
import { client } from "./services/api";
import DefaultTemplate from "./shared/components/DefaultTemplate";

function App() {
  return (
    <ApolloProvider client={client}>
    <DefaultTemplate>
      <RouterOutlet />
    </DefaultTemplate>
    </ApolloProvider >
  );
}

export default App;
