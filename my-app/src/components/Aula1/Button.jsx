
function Button({children}){

    function mensagem(){
    alert("Ola Mundo")
}

    return(
        <b>
        <button onClick={mensagem} >{children}</button>
        </b>
    )
}

export default Button
