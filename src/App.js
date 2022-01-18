import { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Routes/PrivateRoute";
import "./App.css";
import ContactsList from "./components/ContactsList";
import Login from "./components/Login";

function App() {
  const contactDataReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CONTACTS":
        return { ...state, contacts: state.contacts.concat(action.contacts) };
      case "FETCHING_CONTACTS":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };
  const scrollerReducer = (state, action) => {
    switch (action.type) {
      case "SCROLL_UP":
        return { ...state, scrollLevel: state.scrollLevel + 1 };
      default:
        return state;
    }
  };

  const [scroller, scrollerDispatch] = useReducer(scrollerReducer, {
    scrollLevel: 0,
  });
  const [contactData, contactDataDispatch] = useReducer(contactDataReducer, {
    contacts: [],
    fetching: true,
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //API Call to Fetch Data

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/home"
              element={
                <PrivateRoute username={username} password={password}>
                  <ContactsList
                    scroller={scroller}
                    scrollerDispatch={scrollerDispatch}
                    contactData={contactData}
                    contactDataDispatch={contactDataDispatch}
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <Login
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
