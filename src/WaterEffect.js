// src/WaterEffect.js
import * as THREE from "three";
import { Effect } from "postprocessing";

const fragment = `
uniform sampler2D uTexture;
#define MY_PI 3.14159265359


void mainUv(inout vec2 uv) {
  vec4 tex = texture2D(uTexture, uv);
  float vx = -(tex.r * 2.0 - 1.0);
  float vy = -(tex.g * 2.0 - 1.0);
  float intensity = tex.b;
  float maxAmplitude = 0.2;
  uv.x += vx * intensity * maxAmplitude;
  uv.y += vy * intensity * maxAmplitude;
}
`;

export class WaterEffect extends Effect {
  constructor(texture) {
    super("WaterEffect", fragment, {
      uniforms: new Map([
        ["uTexture", new THREE.Uniform(texture)]
      ])
    });
  }
}
