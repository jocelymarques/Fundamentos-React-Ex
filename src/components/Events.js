const Events = () => {

    const handleMyEvents = (e) => {
        console.log(e);
    }


    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Click aqui!</button>
            </div>
        </div>
    )
}

export default Events;