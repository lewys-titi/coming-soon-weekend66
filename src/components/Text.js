import Timer from './Timer';

function Text(){
    return (
        <section className="p-4 flex flex-col items-center w-full h-screen">
            
            <article className="flex flex-col items-center space-y-6 text-white w-full h-full justify-center">     
                <h1 className="p-4 text-2xl md:text-4xl font-montserrat font-bold text-white">Weekend66</h1>           
                <h2 className=" text-4xl md:text-7xl text-center font-montserrat">Découvrez notre selection de weekends</h2>
                <div className="text-3xl" id="timer"><Timer /></div>
                <form action="submit" method="post" className="flex flex-col w-11/12 items-center font-montserrat">
                    
                    <div className="flex md:flex-row flex-col w-11/12 md:w-full justify-center items-center mb-2 space-y-2 md:space-x-4 md:space-y-0">
                        <input type="email" placeholder="mail" className=" w-full p-2 text-base h-10 md:w-96 text-black rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="user-mail" aria-describedby="emailHelp"/>
                        <button className="rounded-md border-white text-base border-2 p-2 w-full md:max-w-xxs">Pré-inscription</button>
                    </div>
                    <p id="emailHelp" className="text-gray-400 text-xs">On ne partagera votre email avec personne.</p>                    
                    
                </form>
            
            </article>
            <div className="text-white text-xs justify-self-end">
                Créé par <a href="https://lewys.io/" target="blank">Lewys - Agence Web à Bordeaux</a>
            </div>
        </section>
    )
}

export default Text