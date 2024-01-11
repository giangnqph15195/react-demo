import { useEffect, useState } from "react"
import { search } from "../api/blog"

const useSearch = (key, blogs) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        if (key) {
            const get = async () => {
                const { data:datasearch } = await search(key)
                setdata(datasearch)
            }
            get()
        } else {
            setdata(blogs)
        }
    }, [key])

    return {
        data,
        setdata
    }
}

export default useSearch