import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  return (
    <section className="bg-white ">
      <div className="container mt-8 px-6 py-12 mx-auto bg-transparent">
        <p style={{ fontSize: 32, padding: 0 }}>Staff Management System</p>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="grid gap-6 grid-cols-4">
          <div className="col-span-3">
            <Table />
          </div>
          <div className="col-span-1">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
