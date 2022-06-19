const TemplateExpressions = () => {

    const name = 'Jocely'

    let number1 = 534;
    let number2 =254;


    function sum(number1, number2) {
        return number1 + number2;
    }

    const data = {
        name: 'Jocely',
        age: 25,
        job: "Programmer"

    }



    return(
        <div>
            <h1>Olá {data.name}, tudo bem ?</h1>
            <p>Você é atua como: {data.job}</p>
            <h2> A soma de {number1} e {number2} é {sum(number1, number2)}</h2>
        </div>
    )
}

export default TemplateExpressions;