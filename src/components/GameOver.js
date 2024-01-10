import "./GameOver.css"

const GameOver = ({retry, score}) =>{
    return(
        <div className="end">
            <h1>Fim de jogo</h1>
            <h2>A sua pontuação foi: {score}</h2>
            <button onClick={retry}>Resetar o jogo</button>
        </div>
    )
}

export default GameOver