import React, { useRef } from "react";
import { ContactReducerActions } from "../redux/reducers/contactSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./ContactList";
const ContactForm = () => {
  let inputref = useRef(null);
  let inputref2 = useRef(null);
  const dispatch = useDispatch()
  const handleClick = () => {
    console.log(inputref.current.value, inputref2.current.value);
    let name = inputref.current.value;
    let phone = inputref2.current.value;
    

    dispatch(
        ContactReducerActions.addContact({
            id: uuidv4(),
            name : name,
            phone : phone
        })
    )
  };

  return (
    <div>
      <div>
        <h1>연락처 App</h1>
      </div>

      <div>
        <input
          ref={inputref}
          type="text"
          className="name"
          placeholder="이름을 입력해주세요."
        />
        <br />
        <input
          ref={inputref2}
          type="text"
          className="phone-Num"
          placeholder="전화번호를 입력해주세요."
        />
        <br />
        <input
          type="button"
          className="name-num-btn"
          value="등록"
          onClick={handleClick}
        />
      </div>
  
      
    </div>
  );
};

export default ContactForm;
