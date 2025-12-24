import React from "react";

function CV() {
  return (
    <>
      <h1 className="italic m-4 grid place-items-center">cv</h1>
         <div class="w-full flex justify-center p-4">
           <div class="w-full max-w-4xl rounded-2xl shadow-lg overflow-hidden">
             <iframe
               src="Rachel_Peterson_CV_2025.pdf"
               class="w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] border-0"
             ></iframe>
           </div>
         </div>
    </>
  );
}

export default CV;
