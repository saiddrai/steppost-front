// import React from "react";

// function Price(price, paragraph) {
//   console.log(paragraph, price);
//   return (
//     <div className="flex flex-col justify-between rounded-2xl border-dashed px-4 py-4 lg:py-8 h-full w-11/12  border-custom mx-auto my-4 text-white bg-purple ">
//       <div>
//         <h1 className="font-title text-4xl text-white">
//           {paragraph && paragraph.data.attributes.title}
//         </h1>
//         <p className="font-body opacity-60">
//           {prices && paragraph.data.attributes.description}
//         </p>
//         <ul className="grid grid-cols-2">
//           {prices &&
//             price.attributes.lists.data.map((item) => {
//               return (
//                 <li className="font-body text-white ml-4 opacity-60 list-disc">
//                   {item.attributes.text}
//                 </li>
//               );
//             })}
//         </ul>
//       </div>
//       <h2 className="self-end">{price.attributes.price}</h2>
//     </div>
//   );
// }

// export default Price;
