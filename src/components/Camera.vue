<template>
  <div class="container text-center">
    <div class="button">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="pink"
        @click="openOrCloseWebCam"
      >
        <div class="img-webcam">
          <img :src="webcam.url" alt="" />
        </div>
      </v-btn>
    </div>
    <div class="camera">
      <video id="webcam" autoplay></video>
      <canvas id="canvas" class="d-none"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "Camera",
  data: () => ({
    webcam: { url: "" },
    webcamIconOpen: { url: require("../assets/videocam-outline.svg") },
    webcamIconClose: { url: require("../assets/videocam-off-outline.svg") },
    offset: true,
    win: "",
  }),
  mounted() {
    this.openWebCam();
  },
  methods: {
    openWebCam() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            const videoPlayer = document.querySelector("video");
            videoPlayer.srcObject = stream;
            videoPlayer.play();
          });
        this.webcam = this.webcamIconOpen;
      }
    },
    closeWebcam() {
      const videoPlayer = document.querySelector("video");
      const mediaStream = videoPlayer.srcObject;
      const tracks = mediaStream.getTracks();
      tracks[0].stop();
      tracks.getTracks().forEach((track) => track.stop());
    },
    openOrCloseWebCam() {
      if (this.webcam.url == this.webcamIconOpen.url) {
        this.webcam = this.webcamIconClose;
        this.closeWebcam();
      } else {
        this.webcam = this.webcamIconOpen;
        this.openWebCam();
      }
    },
    close() {
      window.close();
    },
    minimize() {},
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: 10px;
}
.container .camera {
  width: 50vw;
  height: 50vh;
  -webkit-app-region: drag;
  margin-right: 90px;
  padding: 5px;
}
.container .camera video,
.container .camera #canvas {
  width: 70vw;
  height: 70vh;
  border-radius: 50% !important;
  box-shadow: inset 0 0 0 gold, 0 0 1em rgba(0, 0, 0, 0.9);
  z-index: 2;
}
.container .button {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: -15px;
  z-index: 5;
}
.container .button .img-webcam {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .button .img-webcam img {
  widows: 30px;
  height: 30px;
  padding: 1px;
}
</style>
