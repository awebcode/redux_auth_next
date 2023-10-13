"use client"

import React, { useEffect, useState } from "react";
import { Tabs, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "@/redux/actions/userAction";
import { useRouter } from "next/router";


const { TabPane } = Tabs;

const LoginRegisterTab = () => {
     const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading,setLoading]=useState(false)
    const Router = useRouter();
    
    const user=useSelector(s=>s.user)
    useEffect(() => {
        if (user !== null) {
              Router.push("/Me")
         }
  },[user,Router])
  const handleLoginSubmit = async(e) => {
    e.preventDefault();
   
    setLoading(true)
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:loginEmail, password:loginPassword,action:"login" }),
    });

      const data = await response.json();
      if (data.success) {
          
    
   
        dispatch(setUserData(data.user));
        setLoading(false);
        
    }
    setLoading(false);
    console.log(data);
  };

  const handleRegisterSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
        action: "register",
      }),
    });

      const data = await response.json();
    if (data.success) {
    setLoading(false);
           
           dispatch(setUserData(data.user));
    }
    setLoading(false);
    
    console.log(data);
  };
 
  return (
    <Tabs defaultActiveKey="1" centered className="max-w-lg mx-auto">
      <TabPane tab="Login" key="1">
        <form onSubmit={handleLoginSubmit} className="p-4 bg-white shadow-lg rounded-lg">
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </TabPane>
      <TabPane tab="Register" key="2">
        <form
          onSubmit={handleRegisterSubmit}
          className="p-4 bg-white shadow-lg rounded-lg"
        >
          <div className="mb-4">
            <input
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </TabPane>
    </Tabs>
  );
};

export default LoginRegisterTab;
