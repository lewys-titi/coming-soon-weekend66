import Timer from './Timer';
import Slider from './Slider';

function Text(){
    return (
        <section className="relative flex flex-col items-center w-full h-screen bg-black z-0">
            <div className="flex flex-row items-center w-full h-full z-10">
                <article className="p-4 flex flex-col items-center space-y-6 text-white w-1/2 h-full justify-center">     
                    <h1 className="p-4 text-2xl md:text-4xl font-montserrat font-bold text-white">Weekend66</h1>           
                    <h2 className=" text-4xl md:text-7xl text-center font-montserrat">Découvrez notre sélection de weekends</h2>
                    <div className="text-3xl" id="timer"><Timer /></div>
                    <form action="submit" method="post" className="flex flex-col w-11/12 items-center font-montserrat">
                        
                        <div className="flex md:flex-row flex-col w-11/12 md:w-full justify-center items-center mb-2 space-y-2 md:space-x-4 md:space-y-0">
                            <input type="email" placeholder="Votre email" className=" w-full p-2 text-base h-10 md:w-96 text-white rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="user-mail" aria-describedby="emailHelp"/>
                            <button className="rounded-md border-white text-base border-2 p-2 w-full md:max-w-xxs">Pré-inscription</button>
                        </div>
                        <p id="emailHelp" className="text-gray-400 text-xs">On ne partagera votre email avec personne.</p>                    
                        
                    </form>
                
                </article>
                <article className="flex w-1/2 h-full">
                    <Slider></Slider>
                </article>
                

            </div>
            <div className="absolute bottom-0 text-white text-xs justify-self-end bg-black p-2 z-40">
               <p>Créé par <a href="https://lewys.io/" target="blank">Lewys - Agence Web à Bordeaux</a></p> 
            </div>
        </section>
    )
}

export default Text