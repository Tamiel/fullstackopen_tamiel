import { Part } from "./Part";

export const Content = ({ parts }) => {
return (
    <div>
        {
            parts?.map(part => <Part key={part.title} part={part.title} exercises={part.numberExercises} />)
        }
    </div>
);
};