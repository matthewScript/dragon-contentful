
import Button from './Button'

const MeetTeam = (props) => (
    <section className="section-meet">
        <div className="container article-container">
            <h3>Meet the Team</h3>
            <div className="col-12 meet-wrapper">
                <div className="meet-links" >
                    <Button link="/creative-team" text="Creative Team" size="large" />
                    <Button link="/cast" text="Cast" size="large" />
                </div>
            </div>
        </div>
    </section>
)

export default MeetTeam
