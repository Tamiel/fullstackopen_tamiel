import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Total } from '../components/Total';

export const Courses = () => {

    const course = 'Half Stack application development';

    const partsOfCource = [
        {
            title: 'Fundamentals of React',
            numberExercises: 10
        },
        {
            title: 'Using props to pass data',
            numberExercises: 7
        },
        {
            title: 'State of a component',
            numberExercises: 14
        }
    ];

    return (
      <div>
        <Header course={course} />
        <Content parts={partsOfCource} />
        <Total numbersOfExercises={partsOfCource}/>
      </div>
    );
};