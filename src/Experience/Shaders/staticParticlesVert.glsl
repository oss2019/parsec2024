uniform float maxPointSize;
attribute float pointColor;
varying float vPointColor;
void main(){
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec4 clipPosition = projectionMatrix * mvPosition;
    
    // Calculate the distance from the camera to the particle
  float distanceToCamera = length(mvPosition.xyz);

    // Adjust point size based on distance
  gl_PointSize = maxPointSize * (200.0 / distanceToCamera);
  vPointColor = pointColor;

  gl_Position = clipPosition;
}