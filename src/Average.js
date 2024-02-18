import React, {useState, useMemo, useCallback, useRef} from 'react';
// 8.4 useMemo
const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    // 8.6 useRef
    const inputEl = useRef(null);

    // useMemo와 비슷, 렌더링 성능을 최적화 해야 하는 상황에 사용, Hook을 사용하면 만들어 놨던 함수를 재사용 할 수 있다.
    // const onChange = e => {
    //     setNumber(e.target.value);
    // };
    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // }
    // 8.5 useCallback
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* <b>평균값 : </b> {getAverage(list)} */}
                <b>평균값 : </b> {avg}
            </div>
        </div>
    )
}

export default Average;