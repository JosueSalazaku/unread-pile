const Signup = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}> 
      <main className="h-screen w-screen flex flex-col pt-20 items-center dark:bg-neutral-900 dark:text-white ">
        <div className="mr-11 flex flex-col justify-start pb-5">
        <h1 className="font-bold text-4xl pb-2">Sign up</h1>
        <p>Already have an account? Sign in.</p>
        </div>
        <form action="" className="w-96 h-96  flex flex-col justify-evenly items-center rounded-2xl">
            <label className="mr-60 pt-">Name</label>
            <input type="" name="Name" placeholder="name" id="" className="rounded-md w-72 h-8 p-2 dark:bg-neutral-700 dark:text-white" />
            <label className="mr-60 pt-">Email</label>
            <input type="" name="Name" placeholder="Email" id="" className="rounded-md w-72 h-8 p-2 dark:bg-neutral-700 dark:text-white" />
            <label className="mr-52 pt-">Password</label>
          <input type="password" name="Name" placeholder="password" id="" className="rounded-md w-72 h-8 p-2 dark:bg-neutral-700 active:bg-black dark:text-white" />
          <p className="text-gray-600 mb-2 text-sm mr-16">By registering, you agree to the processing of your personal data by Unread Pile.

</p>
          <div className="flex flex-row-reverse justify-around space-x-3">
          <p className="text-gray-600">I've read and agree to the Terms of Service</p>
            <input type="checkbox" name="" id="" />
          </div>
            <button className="rounded-md w-72 h-8 p-2 py-1 bg-blue-500">Sign up</button>
        </form>
      </main>
      </div>
    );
  };
  
  export default Signup;
  