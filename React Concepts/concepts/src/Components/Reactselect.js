import React from "react";
import Select from "react-select";


const Reactselect = () => {
    const options = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" },
      ];
  return (
    <>
    <div>
      <Select options={options} placeholder="Gender"  />
    </div>
    
    
    </>
  )
}

export default Reactselect
