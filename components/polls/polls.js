import React, { Component } from 'react'
import { createClient } from 'contentful-management'

const client = createClient({
    accessToken: "CFPAT-46c45e32cd7493568b10e79db0a4a8c18ce0801fd8660d1a1f7ae1885d66abf1"
});

class Article extends Component {
    constructor () {
        super()
        this.state = {
            clicked: false,
            answers: null,
            images: null,
            percent: null
        }
    }

    componentDidMount() {
        this.getPollData();
    }

    getPollData = () => {
        const self = this;
        let ids = this.props.poll || [];

        var promises = ids.map(poll => {
            return client.getSpace('sykm2zb64bkw')
                .then(space => space.getEnvironment('master'))
                .then(environment => environment.getEntry(poll.sys.id))
                .then(res => res)
        })

        Promise.all(promises).then((answers) => {
            self.setState({
                answers
            })
            this.getPhotoUrl()
        })
    }

    getPhotoUrl = () => {
        const self = this;
        let ids = this.state.answers || [];

        var promises = ids.map(photo => {
            return client.getSpace('sykm2zb64bkw')
                .then(space => space.getEnvironment('master'))
                .then(environment => environment.getAsset(photo.fields.heroImage['en-US'].sys.id))
                .then(asset => asset)
        })

        Promise.all(promises).then((images) => {
            self.setState({
                images
            })
        })
    }

    onAnswer = (id, index, e) => {
        if(!this.state.clicked) {
            let answers = Array.from(document.querySelectorAll('.answer')),
            arr = this.state.answers;

            answers.map((a) => {
                a.className += ' disabled'
            })

            e.target.className += ' polled'
            arr[index].fields.voteTotal["en-US"] += 1;
            this.setState({
                clicked: true,
                answers: arr
            })
            this.updatePollCount(id)
        }
    }

    updatePollCount = (id) => {
        client.getSpace('sykm2zb64bkw')
            .then(space => space.getEnvironment('master'))
            .then(environment => environment.getEntry(id))
            .then(entry => {
                entry.fields.voteTotal['en-US'] += 1; 
                return entry.update()
            })
            .then((entry) => {
                this.setPercentage()
            })
            .catch(console.error)
    }

    setPercentage = () => {
        let answers = this.state.answers || [],
            count = 0;
        
        let totals = answers.map(answer => {
            count += answer.fields.voteTotal["en-US"]
            return answer.fields.voteTotal["en-US"]
        })

        let percent = totals.map(total => {
            return `${Math.floor((total / count) * 100)}%`
        })

        this.setState({
            percent
        })

        let showPercent = Array.from(document.querySelectorAll('.answer-percent'));
        showPercent.map((div) => {
            div.className += ' show'
        })
    }

    showAnswers = () => {
        const { answers, images, percent } = this.state;
        
        return answers.map((answer, index) => {
            return (
                <div className="answer" 
                    key={index}
                    onClick={(e) => this.onAnswer(answer.sys.id, index, e)}>
                    <figure className="poll-image" style={{backgroundImage: `url(https:${images[index].fields.file['en-US'].url}?h=320&w=480&fit=fill)` }}/>
                    { answer.fields.title['en-US'] }
                    <div className="answer-percent">
                        {percent ? percent[index] : null}
                    </div>
                </div> 
            )
        });
    }

    render() {
        const { poll } = this.props,
            { answers, images } = this.state

        return (
            <div className="poll-wrapper" >
                { answers && images ? this.showAnswers() : null }
            </div>
        )
    }
}
export default Article