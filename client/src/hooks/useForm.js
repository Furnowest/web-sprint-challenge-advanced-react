// write your custom hook here to control your checkout form
import React from "react";
import { useState } from "react";
const useForm = (initialValue,cb)=>{
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    return [values, handleSubmit, handleChanges,showSuccessMessage]
};
export default useForm