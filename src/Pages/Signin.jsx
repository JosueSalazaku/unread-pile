

const Signin = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark"}`}> 
      <main className="h-screen w-screen flex flex-col pt-44 items-center dark:bg-neutral-900 dark:text-white ">
        <div className="mr-16 flex flex-col justify-start">
        <h1 className="font-bold text-4xl pb-2">Welcome Back</h1>
        <p>Let's finish our unread pile togheter</p>
        </div>
        <form action="" className="w-96 h-96 flex flex-col justify-evenly items-center rounded-2xl">
            <label className="mr-72 ml-5 pt-16 ">Email</label>
            <input type="" name="Name" placeholder="Email" id="" className="rounded-md w-80 h-10 p-2 t  border border-slate-950 dark:bg-neutral-700 dark:text-white" />
            <label className="mr-64 ml-4 ">Password</label>
          <input type="password" name="Name" placeholder="password" id="" className="rounded-md w-80 h-10 p-2 border mb-5 border-slate-950 dark:bg-neutral-700 active:bg-black dark:text-white" />
          <button className="w-80 h-10 text-center align-middle rounded-lg border-2 border-neutral-700 ">Google account</button>
            <button className="mt-3 rounded-md w-80 h-19 p-2 py-1 bg-blue-500">Sign In</button>
        </form>
      </main>
      </div>
  )
}

export default Signin