import React, { useState } from "react";

function useCommonInputFields() {
  const [titleInputField, setTitleInputField] = useState("");
  const [commonInputFields, setCommonInputFields] = useState({});

  const postTitleOnChange = (e) => {
    e?.preventDefault();
    setTitleInputField(e.target.value);
  };

  const onChangeCommonInputFieldHandler = (event) => {
    event?.preventDefault();

    // console.log(event.target.name); // name ="post_author"

    setCommonInputFields({
      ...commonInputFields, //purani values ko le ao
      [event.target.name]: event.target.value,
    });
  };

  return {
    titleInputField,
    commonInputFields,
    postTitleOnChange,
    onChangeCommonInputFieldHandler,
    setTitleInputField,
    setCommonInputFields,
  };
}

export default useCommonInputFields;
