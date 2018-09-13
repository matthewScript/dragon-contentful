import Countdown, { getTimeDifference } from 'react-countdown-now';
import Link from 'next/link';

// Random component
const Completionist = () => <div className="countdown">Watch on Netflix today</div>;

// Renderer callback with condition
const renderer = ({ event, days, hours, minutes, seconds, completed }) => {

    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <div className="countdown">
            {event} {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
            <a target="_blank" href="https://www.netflix.com/title/80212245" target="new"><span className="netflix-icon"></span></a>
        </div>;
    }
};

const CountBanner = (props) => (

    <Countdown
        date={props.date}
        renderer={renderer}
        event={props.event}
    />
)

export default CountBanner
