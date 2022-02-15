
import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input',
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const OnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return (
        < div>
            < input
                onChange={OnchangeHandler}
            /> ---- {value}
        </div>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    const onClickHandler = () => setText(value)

    return (
        < div>
            < input onChange={onChangeHandler}/> <button onClick={onClickHandler}>Button</button> Actual Value : {text}
        </div>
    )
}
export const GetValueOfUncontrolledInputByButtonPressFromRef = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const Ref = inputRef.current as HTMLInputElement
        setValue(Ref.value)
    }

    return (
        < div>
            < input ref={inputRef}/> <button onClick={onClickHandler}>Button</button> Actual Value : {value}
        </div>
    )
}


export const ControlledInput = () => <input value={'Maks'}/>



