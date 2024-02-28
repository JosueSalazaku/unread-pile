const Signup = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}> 
      <main className="h-screen w-screen flex flex-col pt-20 items-center dark:bg-neutral-900 dark:text-white ">
            <h1>Unread Pile</h1>
            <form action="" className="w-96 h-96 border-4 flex flex-col justify-evenly items-center rounded-2xl">
                <input type="" name="" id="" className="border" />
                <input type="text" name="" id="" className="border" />
                <input type="password" className="border" />
                <button className="bg-blue-500">Sign up</button>
            </form>
      </main>
      </div>
    );
  };
  
  export default Signup;
  