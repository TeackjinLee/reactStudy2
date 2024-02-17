import React, {useState, useEffect} from "react";
// 8.1.1 useState를 여러 번 사용하기
const Info = () => {
    const [name, setName]  = useState('');
    const [nickname, setNickname] = useState('');

    // 8.2 useEffect
    // 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정할수 있는 Hook입니다.
    useEffect(() => {
        console.log('랜더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;