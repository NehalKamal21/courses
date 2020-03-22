import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Player } from 'video-react';


class Classroom extends Component {
    state = {
        showNote: false,
        NoteText: "",
        notes: [{
            time: "0.00",
            note: "The digital universe will grow from 3.2 zettabytes to 40 zettabytes in only six years."
        },
        {
            time: "0.10",
            note: "Every day, we create 2.5 quintillion bytes of data — so much that 90% of the data in the world today has been created in the last two years alone. "
        },
        {
            time: "0.45",
            note: "The volume of data created by U.S. companies alone each year is enough to fill ten thousand Libraries of Congress."
        },
        {
            time: "1.45",
            note: "Facebook puts up over 10 million photographs every hour and around 3 billion ‘like’ buttons are pushed everyday"
        },
        {
            time: "2.00",
            note: "48 hours of video are uploaded to YouTube every minute"
        },
        {
            time: "2.35",
            note: "By 2015, 4.4 million IT jobs globally will be created to support big data, generating 1.9 million IT jobs in the United States."
        }]
    };

    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    };

    handleStateChange(state, prevState) {
        this.state.notes.forEach((currentNote) => {
            const time = parseInt(currentNote.time.split(".")[0]) * 60 + parseInt(currentNote.time.split(".")[1]);
            if (!state.paused && time >= prevState.currentTime.toFixed(2) && time <= state.currentTime.toFixed(2)) {
                this.setState({
                    showNote: true,
                    NoteText: currentNote.note
                })
                setTimeout(() => {
                    this.setState({
                        showNote: false
                    })
                }, 5000);
            }
        });
    };

    render() {
        const { showNote, NoteText } = this.state;
        const url = "https://drive.google.com/uc?export=download&id=1XWzNXCgl_G5TYUhbgqG_rXhbz6Zisjw-"
        return (
            <div className='classroom-container'>
                <Player
                    ref={(player) => { this.player = player }}
                    playsInline
                    src={url}
                />
                {showNote && <div className="note"> {NoteText} </div>}
            </div>
        )
    }
}

export default withRouter(Classroom);