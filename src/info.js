import React, {useState, useEffect} from "react";
// 8.1.1 useState를 여러 번 사용하기
const Info = () => {
    const [name, setName]  = useState('');
    const [nickname, setNickname] = useState('');

    // 8.2 useEffect
    // 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정할수 있는 Hook입니다.
    // useEffect(() => {
    //     console.log('랜더링이 완료되었습니다!');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });
    
    // 8.2.1 마운트될 때만 실행하고 싶을 때
    // 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행
    // useEffect(() => {
    //     console.log('마운트될 떄만 실행됩니다.');
    // }, []);

    // 8.2.2 특정 값이 업데이트 될 때만 실행하고 싶을 때
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);
    
    // 8.2.3 뒷정리하기
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('unmount');
        };
    }, []);

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