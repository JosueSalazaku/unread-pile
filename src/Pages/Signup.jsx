const Signup = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}> 
      <main className="h-screen w-screen flex flex-col pt-20 items-center dark:bg-neutral-900 dark:text-white ">
        <div className="flex flex-col justify-start">
        <h1 className="font-bold text-4xl pb-2">Sign up</h1>
        <p>Already have an account? Sign in.</p>
        </div>
        <form action="" className="w-96 h-96  flex flex-col justify-evenly items-center rounded-2xl">
            <label className="mr-60 pt-">Name</label>
            <input type="" name="Name" placeholder="name" id="" className="rounded-md w-72 h-8 p-2" />
            <label className="mr-60 pt-">Email</label>
            <input type="" name="Name" placeholder="Email" id="" className="rounded-md w-72 h-8 p-2" />
            <label className="mr-52 pt-">Password</label>
          <input type="password" name="Name" placeholder="password" id="" className="rounded-md w-72 h-8 p-2" />
          <p className="text-gray-600">Terms of service text</p>
            <button className="rounded-md w-72 h-8 p-2 py-1 bg-blue-500">Sign up</button>
        </form>
      </main>
      </div>
    );
  };
  
  export default Signup;
  