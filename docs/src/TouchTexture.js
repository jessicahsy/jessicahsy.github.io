// src/TouchTexture.js
import { WaterTexture } from './WaterTexture';

export class TouchTexture extends WaterTexture {
  constructor() {
    super({ debug: false });
  }

  get canvasTexture() {
    return this.texture;
  }
}
