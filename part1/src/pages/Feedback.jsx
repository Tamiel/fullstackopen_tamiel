import { useState } from 'react';
import { Statistics } from '../components/Statistics';
import { Button } from '../components/Button';

export const Feedback = () => {
    
    let [good, setGood] = useState(0);
    let [neutral, setNeutral] = useState(0);
    let [bad, setBad] = useState(0);

    const handlerClic = (seterState) => () => {
        seterState(prevValue => ++prevValue);
    };

    return (
        <div>
            <h2>Give feedback</h2>
            <Button onClick={handlerClic(setGood)} text={'Good'}/>
            <Button onClick={handlerClic(setNeutral)} text={'Neutral'}/>
            <Button onClick={handlerClic(setBad)} text={'Bad'}/>
            <Statistics statistics={{ good, neutral, bad }} />
        </div>
    );
};