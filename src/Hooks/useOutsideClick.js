import {useEffect} from "react";

export default function useOutsideClick(ref , exception , cb) {
    useEffect(() => {

        function handleOutsideClick(e) {
            console.log(e.target)
            if (ref.current && !ref.current.contains(e.target) && !e.target.classList.contains(exception)) {
                cb()
            }


        }

        document.addEventListener("click", handleOutsideClick)

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }

    }, [ref , cb]);
}
