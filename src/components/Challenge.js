const Challenge = () => {

    const data = {
        number1: 534,
        number2: 254
    }


const sum = () => console.log(data.number1 + data.number2);

    return (
        <div>
            <div>
                <button onClick={sum}>Somar</button>
            </div>
          
        </div>
    )

}

export default Challenge;