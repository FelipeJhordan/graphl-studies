import RouterOutlet from "./Routes";
import DefaultTemplate from "./shared/components/DefaultTemplate";

function App() {
  return (
    <DefaultTemplate>
      <RouterOutlet />
    </DefaultTemplate>
  );
}

export default App;
