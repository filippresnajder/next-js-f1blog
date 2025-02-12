import { FaSun, FaMoon } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return (
          <div>
              <BsThreeDots size={24}/>
          </div>
        );
    }

    return (
        <div>
            <button onClick={() => resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')}>
                {resolvedTheme === 'dark' ? <FaMoon size={24}/> : <FaSun size={24}/>}
            </button>
        </div>
    )
}

export default ThemeToggle