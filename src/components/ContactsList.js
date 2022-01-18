import React, { useRef } from "react";
import Card from "./UI/Card";
import LoadingElement from "./UI/LoadingElement";
import useInfiniteScroll from "./Hooks/useInfiniteScroll";
import useFetchData from "./Hooks/useFetchData";
import SignOut from "./UI/SignOut";

const ContactsList = ({
  scroller,
  scrollerDispatch,
  contactData,
  contactDataDispatch,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  useFetchData(scroller, contactDataDispatch);
  let bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef, scrollerDispatch);
  
  return (
    <>
      {username === "foo" && password === "bar" ? (
        <div className="contacts-list">
          <SignOut
            setUsername={setUsername}
            setPassword={setPassword}
          />

          {contactData.contacts.map((contact, index) => (
            <Card
              name={contact.name}
              key={index}
              imageUrl={contact.picture.medium}
            />
          ))}
          <div ref={bottomBoundaryRef}>
            <LoadingElement />
          </div>
        </div>
      ) : (
        <div>Back to Login</div>
      )}
    </>
  );
};
export default ContactsList;
