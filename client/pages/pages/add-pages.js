import React from "react";
import { Tabs } from "antd";
import MenuFormEng from "../../components/Forms/menus-eng";
import MenuFormNep from "../../components/Forms/menus-nep";
import { useSelector } from "react-redux";


const items = [
  { label: "English", key: "english", children: <MenuFormEng /> }, // remember to pass the key prop
  // { label: "Nepali", key: "nepali", children: <MenuFormNep /> },
];

const onChange = (key) => {
  console.log(key);
};
const AddPages = () => {
  const style = {
    borderColor: "#fffbfb2e",
    // color:"gray",
    // borderSize:"2px"
  };

 
  return (
    <>
      <h2>Menu</h2>
      <hr style={style} />

      <div className="card-container">
        <Tabs>
          {items.map((x,i)=>{
            return (<Tabs.TabPane tab={x.label} key={x.key}>
            {x.children}
          </Tabs.TabPane>)
          })}
         
        </Tabs>
      </div>
    </>
  );
};

export default AddPages;
