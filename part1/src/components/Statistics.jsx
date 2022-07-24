import { RenderComponentIs } from './RenderComponentIs';
import { Statistic } from './Statistic';

export const Statistics = ({ statistics : { good, neutral, bad } }) => {

    let totalFeedback = good + neutral + bad;

return (
<div>
    <RenderComponentIs condition={totalFeedback}>
        <br />
        <h2>Statistics</h2>
        <table>
            <tbody>
                <Statistic value={good} text={'Good'} />
                <Statistic value={neutral} text={'Neutral'} />
                <Statistic value={bad} text={'Bad'} />
                <Statistic value={totalFeedback} text={'Total'} />
                <Statistic value={(good - bad) / totalFeedback} text={'Promedio'} />
                <Statistic value={`${good * 100 / totalFeedback}%`} text={'Positivo'} />
            </tbody>
        </table>
    </RenderComponentIs>
</div>
)};