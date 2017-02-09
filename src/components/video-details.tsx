import * as React from 'react';
import VideoItem from './video-item';
import { Link } from 'react-router';
import { VideoItem as VideoItemModel } from '../models/video-item';
import { RouteComponentProps } from 'react-router';
import { AppState } from '../store/appState';
import { connect } from 'react-redux';
import { loadVideoByIdAction, loadVideoSuggestionsAction, playVideoAction } from '../actions/video';
import { Action } from 'redux';

class VideoDetails extends React.Component<VideoDetailsProps, any> {
    componentWillReceiveProps(nextProps: VideoDetailsProps) {
        if (nextProps.routeParams.id !== this.props.routeParams.id) {
            this.loadData(nextProps.routeParams.id);
        }
    }
    componentWillMount() {
        this.loadData(this.props.routeParams.id);
    }

    loadData(id: string) {
        this.props.loadVideo(id);
        const randomNumber = getRandomIntInclusive(1, 99);
        this.props.getSuggestions({
            skip: randomNumber,
            limit: 5
        });
    }

    onItemPlayed(item: VideoItemModel) {
        this.props.play(item);
    }

    render() {
        const {suggestions} = this.props;

        return (
            <div className="container video-details-component">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="video-details-item">
                            {this.randerMainVideoItem()}
                        </div>
                    </div>
                    <div className="col-sm-4 suggestion-list">
                        <h4>Suggestions:
                            <Link
                                to="/internal/videos"
                                className="btn btn-xs btn-primary pull-right"
                            >
                                show all
                            </Link>
                        </h4>
                        <div
                        >
                            {suggestions && suggestions.map(item => (
                                <div key={item._id}>
                                    <VideoItem
                                        {
                                        ...(item &&
                                            {
                                                ...item,
                                                url: `http://localhost:3001/${item.url}`
                                            })
                                        }
                                        play={this.onItemPlayed.bind(this, item)}
                                    />

                                </div>
                            ))}
                        </div>
                    </div >
                </div >
            </div>
        );
    }

    randerMainVideoItem() {
        const {selectedVideo} = this.props;
        return (<VideoItem
            {
            ...(selectedVideo &&
                {
                    ...selectedVideo,
                    url: `http://localhost:3001/${selectedVideo.url}`
                })
            }
            play={this.onItemPlayed.bind(this, selectedVideo)}
        />);
    }

};

interface VideoDetailsProps extends RouteComponentProps<VideoDetails, any> {
    selectedVideo: VideoItemModel;
    loadVideo: (id: string) => void;
    getSuggestions: (payload: { skip: number, limit: number }) => void;
    suggestions: VideoItemModel[];
    play: (item: VideoItemModel) => void;
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        loadVideo: (id: string) =>
            dispatch(loadVideoByIdAction(id)),
        getSuggestions: (payload: { skip: number, limit: number }) =>
            dispatch(loadVideoSuggestionsAction(payload)),
        play: (item) => dispatch(playVideoAction(item))
    };
}

function mapStateToProps(state: AppState, ownprops: any) {
    return {
        selectedVideo: state.video.selectedVideo,
        suggestions: state.video.suggestions
    };
}

export default connect<{}, {}, VideoDetailsProps>(mapStateToProps, mapDispatchToProps)(VideoDetails);

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
