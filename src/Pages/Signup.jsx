import { Route } from "react-router-dom";

const Signup = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}> 
      <main className="h-screen w-screen flex flex-col pt-44 items-center dark:bg-neutral-900 dark:text-white ">
        <div className="mr-16 flex flex-col justify-start pb-5">
        <h1 className="font-bold text-4xl pb-2">Sign up</h1>
        <p>Already have an account? <a href="/Signin" className="text-blue-500 font-bold">Sign In</a></p>
        </div>
        <form action="" className="w-96 h-96  flex flex-col justify-between items-center rounded-2xl spa">
            <label className="mr-72 ml-5 pt-">Name</label>
            <input type="" name="Name" placeholder="name" id="" className="rounded-md w-80 h-10 p-2 border border-slate-950 dark:bg-neutral-700 dark:text-white" />
            <label className="mr-72 ml-5 pt-">Email</label>
            <input type="" name="Name" placeholder="Email" id="" className="rounded-md w-80 h-10 p-2  border border-slate-950 dark:bg-neutral-700 dark:text-white" />
            <label className="mr-64 ml-4 pt-">Password</label>
          <input type="password" name="Name" placeholder="password" id="" className="rounded-md w-80 h-10 p-2 border border-slate-950 dark:bg-neutral-700 active:bg-black dark:text-white" />
          <p className="text-neutral-700 mb-2 text-sm  mr-1">By registering, you agree to the processing of <br /> your personal data by Unread Pile.</p>
          <div className="flex flex-row-reverse justify-around space-x-3">
          <p className="text-neutral-700">I've read and agree to the Terms of Service</p>
            <input type="checkbox" name="" id="" className="pl-2" />
          </div>
            <button className="mt-3 rounded-md w-80 h-19 p-2 py-1 bg-blue-500">Sign up</button>
        </form>
      </main>
      </div>
    );
  };
  
  export default Signup;
  