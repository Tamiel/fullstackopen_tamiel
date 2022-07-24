import { useState } from 'react';
import { RenderComponentIs } from '../components/RenderComponentIs'

export const Anecdotes = ({ anecdotes }) => {

    const [votes, setVotes] = useState(
        {
            currentAnecdote: Math.floor(Math.random() * anecdotes.length),
            votesOfAnecdotes: anecdotes.flatMap(_ => [0]),
            mostVoted: null
        }
    );

    const handlerClick = (max) => () => {

        let newSelectedAnecdote = Math.floor(Math.random() * max);

        setVotes(prevValue => ({ ...prevValue, currentAnecdote: newSelectedAnecdote }));
    };

    const voteButton = () => setVotes(prevValue => {

        let newValue = { ...prevValue };
        newValue.votesOfAnecdotes[newValue.currentAnecdote] += 1;

        if (prevValue.mostVoted) {
            newValue.votesOfAnecdotes[newValue.currentAnecdote] >= prevValue.votesOfAnecdotes[prevValue.mostVoted]
                ? newValue.mostVoted = newValue.currentAnecdote
                : null;
        } else {
            newValue.mostVoted = newValue.currentAnecdote
        }

        return newValue;
    });

    return (
        <div>
            <p>{`${votes.votesOfAnecdotes[votes.currentAnecdote]}: ${anecdotes[votes.currentAnecdote]}`}</p>
            <button onClick={voteButton}>vote</button>
            <button onClick={handlerClick(anecdotes.length)} >next anecdote</button>
            <br />
            <h3>anecdotes with most votes</h3>
            <RenderComponentIs condition={votes.mostVoted} >
                <p>{anecdotes[votes.mostVoted]}</p>
            </RenderComponentIs>
        </div>
    );
};