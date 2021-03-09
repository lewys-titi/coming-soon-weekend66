

function Text(){
    return (
        <section className="p-4 flex flex-col items-center w-full h-screen bg-indigo-600 bg-opacity-10">
            <h1 className="p-6 text-4xl font-balsamiq font-bold">Weekend66</h1>
        <article className=" flex flex-col items-center space-y-6">
            {/* <img src={logo} alt='La maison jungle logo' className="lmj-logo w-10 h-10 self-center"></img> */}
            
            <h2>Comming soon</h2>
            <p>Le super site de Weekend66 arrive bientôt</p>
            <p>Timer 13 mai</p>
            <form action="submit" method="post" className="grid grid-cols-1">
                <div className="flex flex-col">
                    <label htmlFor="user-mail" className="text-gray-700">Mail</label>
                    <input type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="user-mail" aria-describedby="emailHelp"/>
                    <p id="emailHelp" className="text-gray-500 text-xs">We'll never share your email with anyone else.</p>
                </div>
                <button className="rounded-xl border-black border-2 p-2 mt-6">Tenez-moi informé !</button>
            </form>
        
        </article>
        </section>
    )
}

export default Text