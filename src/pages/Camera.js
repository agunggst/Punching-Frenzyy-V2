import React, { Component } from "react";
import * as posenet from "@tensorflow-models/posenet";
import { connect } from "react-redux";
import {
  drawKeyPoints,
  drawSkeleton,
  config,
} from "../helpers";
import { updateKeypoints, calibrate } from "../store/actions/keypoints";
import Game from "./Game";
import Calibration from "../components/Calibration";
import Ready from "../components/Ready";

class PoseNet extends Component {
  static defaultProps = config;

  constructor(props) {
    super(props, PoseNet.defaultProps);
    this.state = {
      loading: true,
    };
  }

  getCanvas = (elem) => {
    this.canvas = elem;
  };

  getVideo = (elem) => {
    this.video = elem;
  };

  stopVideo = () => {
    const video = this.video;
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => track.stop());
  };

  async componentDidMount() {
    try {
      await this.setupCamera();
    } catch (error) {
      throw new Error(
        "This browser does not support video capture, or this device does not have a camera"
      );
    }

    try {
      this.posenetModel = await posenet.load();
    } catch (error) {
      throw new Error("posenet failed to load");
    } finally {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 200);
    }

    this.detectPose();
  }

  async setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        "Browser API navigator.mediaDevices.getUserMedia not available"
      );
    }

    const video = this.video;
    video.width = this.props.width;
    video.height = this.props.height;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
          width: this.props.width,
          height: this.props.height,
        },
      });
      video.srcObject = stream;
    } catch (error) {
      throw new Error("Failed to access webcam");
    }

    return new Promise((resolve) => {
      video.onloadedmetadata = () => {
        video.play();
        resolve(video);
      };
    });
  }

  detectPose() {
    const canvas = this.canvas;
    const canvasContext = canvas.getContext("2d");

    canvas.width = this.props.width;
    canvas.height = this.props.height;

    this.poseDetectionFrame(canvasContext);
  }

  poseDetectionFrame(canvasContext) {
    const {
      algorithm,
      imageScaleFactor,
      flipHorizontal,
      outputStride,
      minPoseConfidence,
      minPartConfidence,
      maxPoseDetections,
      nmsRadius,
      showVideo,
      showPoints,
      showSkeleton,
      skeletonColor,
      skeletonLineWidth,
    } = this.props;

    const posenetModel = this.posenetModel;
    const video = this.video;

    const poseDetectionFrameInner = async () => {
      let poses = [];

      switch (algorithm) {
        case "multi-pose": {
          poses = await posenetModel.estimateMultiplePoses(video, {
            imageScaleFactor,
            flipHorizontal,
            outputStride,
            maxPoseDetections,
            minPartConfidence,
            nmsRadius,
          });
          break;
        }
        case "single-pose": {
          const pose = await posenetModel.estimateSinglePose(video, {
            imageScaleFactor,
            flipHorizontal,
            outputStride,
          });
          poses.push(pose);
          break;
        }
        default: {
          const pose = await posenetModel.estimateSinglePose(video, {
            imageScaleFactor,
            flipHorizontal,
            outputStride,
          });
          poses.push(pose);
        }
      }

      canvasContext.clearRect(0, 0, this.props.width, this.props.height);

      if (showVideo) {
        canvasContext.save();
        canvasContext.scale(-1, 1);
        canvasContext.translate(-this.props.width, 0);
        canvasContext.drawImage(
          video,
          0,
          0,
          this.props.width,
          this.props.height
        );
        canvasContext.restore();
      }

      if (!this.props.calibrated.keypoints && poses[0]) {
        if (
          poses[0].keypoints[1].score > minPartConfidence &&
          poses[0].keypoints[11].score > minPartConfidence &&
          poses[0].keypoints[13].score > minPartConfidence &&
          !this.props.calibrated.keypoints
        ) {
          this.props.calibrate(poses[0]);
        }
      }

      poses.forEach(({ score, keypoints }) => {
        // update keypoint di state
        this.props.updateKeypoints(keypoints);

        if (score >= minPoseConfidence) {
          if (showPoints) {
            drawKeyPoints(
              keypoints,
              minPartConfidence,
              skeletonColor,
              canvasContext
            );
          }
          if (showSkeleton) {
            drawSkeleton(
              keypoints,
              minPartConfidence,
              skeletonColor,
              skeletonLineWidth,
              canvasContext
            );
          }
        }
      });

      requestAnimationFrame(poseDetectionFrameInner);
    };
    poseDetectionFrameInner();
  }

  render() {
    const loading = this.state.loading ? <img src="/assets/loading.gif" alt="" />: null;
    return (
      <div className="centered">
        <div className="loading center" >{loading}</div>
        <div>
          <video id="videoNoShow" playsInline ref={this.getVideo} />
          <canvas className="webcam" ref={this.getCanvas} />
          {!loading ? <Calibration /> : null}
          {!loading ? <Ready /> : null}
          {!loading ? (
            <Game stopVideo={this.stopVideo} width={this.props.width} height={this.props.height} />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calibrated: state.keypoint.calibrated,
    isGameEnded: state.keypoint.isGameEnded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateKeypoints: (keypoints) => {
    dispatch(updateKeypoints(keypoints));
  },

  calibrate: (calibratedPose) => {
    dispatch(calibrate(calibratedPose));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseNet);
