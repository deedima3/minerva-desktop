import { useState } from 'react'

export function useToast(duration : number){
    const [show, setShow] = useState(true)

    const showToast = (duration : number) => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, duration)
    }

    return [show, showToast] as const

}