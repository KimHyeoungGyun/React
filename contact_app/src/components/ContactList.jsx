import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const List = useSelector((state) => state.contact.contacts);
  console.log(List);
  return (
    <div>
      <SearchBox />
      <p>
        {List &&
          List.map((list) => {
            <ContactItem key={list.id} />;
          })}
      </p>
    </div>
  );
};

export default ContactList;
