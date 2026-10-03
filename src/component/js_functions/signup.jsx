import login from "./login";

export async function signin(name , email , password ) {
    
    console.log(name, email, password)
    try{

      const response = await fetch('http://localhost:5000/api/auth/signup' , 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password
          }),
        }
      );
      const data = await response.json()
      if(!response.ok){
        throw new Error(data.message || "Signup failed");
        console.log(data.message || "Signup failed")
      }
      console.log('signup okk')
      await login(email, password);
      return data;
      
    }
     catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
  
  }
 export  default signin;