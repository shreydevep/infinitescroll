import { useEffect } from "react";

const useFetchData = (scroller, contactDataDispatch) => {
  useEffect(() => {
    console.log("Here");
    contactDataDispatch({ type: "FETCHING_CONTACTS", fetching: true });
    fetch("https://randomuser.me/api/?results=10")
      .then((data) => data.json())
      .then((data) => {
        let contacts = data.results;
        console.log(contacts);
        setTimeout(() => {
          contactDataDispatch({ type: "ADD_CONTACTS", contacts });
          contactDataDispatch({ type: "FETCHING_CONTACTS", fetching: false });
        }, 1000);
      })
      .catch((e) => {
        contactDataDispatch({ type: "FETCHING_CONTACTS", fetching: false });
        console.log(e);
      });
  }, [contactDataDispatch, scroller.scrollLevel]);
};

export default useFetchData;
