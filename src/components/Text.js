import Timer from './Timer';

function Text(){
    return (
        <section className="p-4 flex flex-col items-center justify-center w-full h-screen bg-black bg-opacity-90">
            <h1 className="p-6 text-4xl font-balsamiq font-bold text-white">Weekend66</h1>
            <article className="flex flex-col items-center space-y-6 text-white w-full">
                {/* <img src={logo} alt='La maison jungle logo' className="lmj-logo w-10 h-10 self-center"></img> */}
                
                <h2 className="text-7xl text-center font-balsamiq">Découvrez notre selection de weekends</h2>
                <div className="text-5xl" id="timer"><Timer /></div>
                <form action="submit" method="post" className="flex flex-col w-11/12 items-center">
                    
                    <div className="flex flex-row w-full justify-center">
                        <input type="email" placeholder="mail" className="mt-1 w-48 h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="user-mail" aria-describedby="emailHelp"/>
                        <button className="rounded-xl border-white border-2 p-2 mt-6">Pré-inscription</button>
                    </div>
                    <p id="emailHelp" className="text-gray-400 text-xs">On ne partagera votre email avec personne.</p>                    
                    
                </form>
            
            </article>
        </section>
    )
}

export default Text