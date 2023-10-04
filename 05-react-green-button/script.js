const App = ({initialButtonText, initialButtonStyle}) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [buttonStyle, setButtonStyle] = React.useState(initialButtonStyle)
    const onButtonClick = () => {
        setButtonText("Hello From React!")
        setButtonStyle("cuteBtn")
    }

    return (
        <div className="app">
            <button className={buttonStyle} onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText='Click me' initialButtonStyle=''/>)