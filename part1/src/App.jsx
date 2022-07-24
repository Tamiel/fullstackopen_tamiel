import { Routes, Route, Link } from 'react-router-dom';
import { Anecdotes } from './pages/Anecdotes';
import { Feedback } from './pages/Feedback';
import { Courses } from './pages/Courses';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<div></div>} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/anecdotes' element={<Anecdotes anecdotes={anecdotes} />} />
            </Routes>
            <nav>
                <Link to={'/courses'} >Courses</Link>
                <Link to={'/feedback'} >FeedBack</Link>
                <Link to={'/anecdotes'} >Anecdotes</Link>
            </nav>
        </div>
    );
};