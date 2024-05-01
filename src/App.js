import { useEffect, useRef } from "react";
import "./App.css";
import { getAllData, saveItem } from "./firebase/function/function";

function App() {

  const email = useRef();
  const password = useRef();

  const save = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    saveItem(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header bg-primary text-light text-center">
                Add Your Data
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email :- </label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={email} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password :- </label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={password} />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-primary" onClick={save}>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;