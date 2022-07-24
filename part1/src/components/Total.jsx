export const Total = ({ numbersOfExercises }) => {
    return (
        <p>
            { `Number of exercises ${numbersOfExercises?.map(part => part.numberExercises).reduce((reducer, current) => reducer + current, 0)}` }
        </p>
    );
};