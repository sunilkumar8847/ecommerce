"use client"; // Add this at the top of the file

import React from "react";

export default function Footer() {
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white bg-gray-900 rounded-full">
        <div className="bg-orange-500 h-12 flex justify-center items-center rounded-full">
          <h5>Get Connected To Your Social Networks</h5>
        </div>
        
        <div className="flex justify-center items-center gap-16">
          <div className="mb-16"> 
            <h3 className="font-bold my-4">Company</h3>
            <hr className="mb-4"/>
            <div>
              <p>Sunil Company is one of the best</p>
              <p> leading companies out there</p>
            </div>
          </div>
          <div className="mb-8"> 
            <h3 className="font-bold my-4">Products</h3>
            <hr className="mb-4"/>
            <div className="flex flex-col gap-4">
              <p>React</p>
              <p>NextJs</p>
              <p>Tailwind</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div className="mb-8"> 
            <h3 className="font-bold my-4">Useful Links</h3>
            <hr className="mb-4" />
            <div className="flex flex-col gap-4">
              <p>Your Account</p>
              <p>Become an Affiliate</p>
              <p>Shipping Rates</p>
              <p>Help</p>
            </div>
          </div>
          <div className="mb-8"> 
            <h3 className="font-bold my-4">Contact</h3>
            <hr  className="mb-4"/>
            <div className="flex flex-col gap-4">
              <p>Bhubaneswar, 751029, India</p>
              <p>kumar88sunilk@gmail.com</p>
              <p>+91 1234567890</p>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
