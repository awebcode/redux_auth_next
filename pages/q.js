import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();
    const [user, setUser] = useState(null);
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:8000/api/v1/me", {
        method: "GET",
        
        credentials: "include",
      });
      const userData = await response.json();
      setUser(userData);
    };
  const registerMutation = useMutation(
    async (newUser) => {
      const response = await fetch("http://localhost:8000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify(newUser),
        credentials:"include"
      });
      const data = await response.json();
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
    }
  );

   const loginMutation = useMutation(
     async (credentials) => {
       const response = await fetch("http://localhost:8000/api/v1/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(credentials),
         credentials: "include",
       });
       const data = await response.json();

       // Fetch user data after successful login

       return data;
     },
     {
       onSuccess: async () => {
         queryClient.invalidateQueries("user");
         await fetchUserData(); // Call the fetchUserData function after login
       },
     }
   );

  const logoutMutation = useMutation(
    async () => {
      const response = await fetch("http://localhost:8000/api/v1/logout", {
          method: "GET",
          credentials:"include",
          headers: {
            "Content-Type": "application/json",
            
        },
      });
      
      return response;
    },
    {
      onSuccess: async() => {
            queryClient.invalidateQueries("user");
            await fetchUserData()
      },
    }
  );

  const handleRegister = async (e) => {
    e.preventDefault();
      const data = await registerMutation.mutateAsync({ email, password });
       console.log(data);
    // Handle success or error
  };

  const handleLogin = async (e) => {
    e.preventDefault();
     const data =  await loginMutation.mutateAsync({ email, password });
        console.log(data);
    // Handle success or error
  };

  const handleLogout = async () => {
      const data = await logoutMutation.mutateAsync();
       console.log(data)
    // Handle success or error
    };
    

  return  (
      <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded shadow">
          
           {user ? (
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.user?.name}</h2>
          <p className="text-green-600 mb-4">{user?.user?.email}</p>
        </div>
          ) :(
              <>
      <div className="mb-6">
        <h2 className="text-2xl mb-4 text-center font-bold">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full py-2 px-3 border border-green-500 rounded mb-2 focus:outline-none focus:ring focus:border-green-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full py-2 px-3 border border-green-500 rounded mb-4 focus:outline-none focus:ring focus:border-green-400"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-green-400"
          >
            Register
          </button>
        </form>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full py-2 px-3 border border-green-500 rounded mb-2 focus:outline-none focus:ring focus:border-green-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full py-2 px-3 border border-green-500 rounded mb-4 focus:outline-none focus:ring focus:border-green-400"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-green-400"
          >
            Login
          </button>
        </form>
                  </div>
                  )</>
  )}
      <button
        onClick={handleLogout}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-green-400"
      >
        Logout
      </button>
    </div>
  );
};

export default AuthComponent;
