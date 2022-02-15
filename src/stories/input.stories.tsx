
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

export const ControlInput = () => {
    const[parentValue, setParentValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <input value={parentValue} onChange={onChangeHandler}/>
}
export const ControlCheckBox = () => {
    const [state, setState] = useState(false)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => setState(e.currentTarget.checked)

    return <><input type={'checkbox'} checked={state} onChange={onChangeHandler}/> --- {state.toString()}</>
}
export const ControlSelect = () => {
    const [state, setState] = useState('none')
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => setState(e.currentTarget.value)

    return <div>
        <select onChange={onChangeHandler} value={state}>
            <option>none</option>
            <option value={'1'}>Moscow</option>
            <option value={'2'}>Minsk</option>
            <option value={'3'}>Kiev</option>
        </select>
        --- {state}
    </div>
}



