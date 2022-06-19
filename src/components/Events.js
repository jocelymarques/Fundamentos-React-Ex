const Events = () => {

    const handleMyEvents = (e) => {
        console.log(e);
    }

    const renderSomething = (x) =>{
        if(x){
            return <h1>Parâmetro é Verdadeiro {x}</h1>
        }else{
            return <h1>Parâmetro é Falso {x}</h1>
        }
    }


    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Click aqui!</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events;