import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router';
import { AppState } from '../store/appState';
import { connect } from 'react-redux';
import { VideoItem as VideoItemModel } from '../models/video-item';

class VideoItem extends React.Component<VideoItemProps, any> {
    videoControl: HTMLVideoElement;
    render() {
        return (
            <section className={this.props.isWide ? 'video-details-item' : 'video-item'}>
                <Link
                    className="title"
                    to={`/internal/video/${this.props._id}`}
                >
                    {this.props.name}
                </Link>
                <video
                    controls
                    onPlay={this.props.play}
                    ref={(videoControl) => this.videoControl = videoControl}
                    autoPlay={this.props.isWide}
                    src={this.props.url}
                >
                    <source src={this.props.url} type="video/mp4" />
                    {'Your browser does not support the video tag.'}
                </video>
                <div className="rating">
                    {/*<vp-rating className="txt-left" value={this.props.rate} [max]="5"></vp-rating>*/}
                </div >
                <div className="desc">
                    {
                        this.props.isWide ? this.props.description :
                            truncateString(this.props.description, 150)
                    }
                </div>
            </section >
        );
    }

    componentWillReceiveProps(nextProps: VideoItemProps) {
        if (this.props.currentVideo && nextProps.currentVideo
            && this.props.currentVideo._id !== nextProps.currentVideo._id
            && nextProps.currentVideo._id !== nextProps._id) {
            this.videoControl.pause();
        }
    }
}

interface VideoItemProps extends RouteComponentProps<VideoItem, any> {
    _id: string;
    name: string;
    url: string;
    description: string;
    ratings: number[];
    play: () => void;
    currentVideo?: VideoItemModel;
    isWide?: boolean;
}

function mapStateToProps(state: AppState, ownprops: any) {
    return { currentVideo: state.video.currentVideo };
}

export default connect<{}, {}, VideoItemProps>(mapStateToProps)(VideoItem);

function truncateString(str: string, num: number) {
    if (!str) { return; }
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
}