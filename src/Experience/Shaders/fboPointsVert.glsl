uniform sampler2D uPositions;
uniform float uTime;
attribute vec3 aRandom;
varying vec3 vPosition;

void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;
  pos.x += sin(uTime * aRandom.x) * 0.01;
  pos.y += cos(uTime * aRandom.y) * 0.01;
  pos.z += sin(uTime * aRandom.z) * 0.01;
  vPosition = pos;


  vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = 10.0 / -mvPosition.z;
}