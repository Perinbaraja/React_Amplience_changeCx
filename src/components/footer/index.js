import React from "react";


const Footer = ({data}) => {
//   const {allItems} = data;
 console.log("show",data)
const items=(data.allItems[0]?.footerItems)
  return (
    <div className="bg-slate-100 h-32 ">
       <div  className="grid grid-cols-4 text-xl px-44 py-4 text-orange-400">
            {items.map((item,k)=>
         <div    >{item}</div>
         )}
           </div>
        
    </div>
  );
};

export default Footer;