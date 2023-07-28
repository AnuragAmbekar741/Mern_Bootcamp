import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="w-full grid justify-center">
          <Form />
          <TodoList />
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
