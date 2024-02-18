import React from 'react';
import useInputs from './useInputs';

const Info = () => {
    console.log("sss");
    const [state, onChange] = useInputs({
        name : '',
        nickname : ''
    });
    console.log(state);
    console.log(onChange);
    const [name, nickname] = state;
    console.log("sss2");
    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange} />
                <input name='nickname' value={nickname} onChange={onChange} />
            </div>
            <div>
                <b>이름 : </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nickname}
            </div>
        </div>
    )
}

export default Info;