import "./style.css";
import { getVideo, drawVideo } from "./src/camera";

const video = await getVideo();
const canvas = document.querySelector("canvas");
const button = document.querySelector("#take");

button.addEventListener("click", () => {
  console.log("Taking a picture!");
  drawVideo(video, canvas);
});
