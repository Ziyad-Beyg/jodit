import { useTypewriter, Cursor } from "react-simple-typewriter"

const Typewriter = () => {
    let [text] = useTypewriter({
        words: ["Developer", "Designer", "Photographer"],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <div>
            <span>{text}</span>
            <span><Cursor /></span>
        </div>
    )
}

export default Typewriter