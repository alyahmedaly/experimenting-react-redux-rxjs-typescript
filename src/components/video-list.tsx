import * as React from 'react';
import VideoItem from './video-item';
import { VideoItem as VideoItemModel } from '../models/video-item';
import { RouteComponentProps } from 'react-router';
import { AppState } from '../store/appState';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { LOADVideosAction, PlayVideoAction } from '../actions/video';

class VideoList extends React.Component<VideoListProps, any> {

    componentWillMount() {
        this.props.loadVideos();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.videos.map(item => (
                        <div
                            className="col-md-6 col-lg-4"
                            key={item._id}
                        >

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
                    {
                        // <div className="col-md-6 col-lg-4 spinner" *ngIf="loadMoreloading" >
                        //  <img src="../../../assets/images/spinner.gif" alt="">
                        // </div>
                    }
                </div >
            </div >
        );
    }

    onItemPlayed(item: VideoItemModel) {
        this.props.play(item);
    }
}

interface VideoListProps extends RouteComponentProps<any, any> {
    videos: VideoItemModel[];
    loadVideos: () => void;
    play: (item: VideoItemModel) => void;
}

function mapStateToProps(state: AppState, ownprops: any) {
    return { videos: state.video.videos };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        loadVideos: () => dispatch(new LOADVideosAction()),
        play: (item) => dispatch(new PlayVideoAction(item))
    };
}

export default connect<{}, {}, VideoListProps>(mapStateToProps, mapDispatchToProps)(VideoList);