uniform vec3 uColor;
uniform float uTime;
uniform int uModel1;
uniform int uModel2;
uniform float uTransitionProgress;
varying vec3 vPosition;

vec3 chooseColor(int m) {
  vec3 color;

  if(m == 0){
    color = vec3(1.0, 0.0, 1.0);
  } else if (m == 1){
    color = vec3(0.0, 1.0, 0.0);
  } else {
    color = vec3(0.0, 1.0, 0.0);
  }
  
  return color;
}  



void main() {
  vec3 color1 = chooseColor(uModel1);
  vec3 color2 = chooseColor(uModel2);
  float distance = distance(gl_PointCoord, vec2(0.5));
  float alpha = distance > 0.5 ? 0.0 : 0.6;

  vec3 colorMix = mix(color1, color2, uTransitionProgress);
  
  
  gl_FragColor = vec4(colorMix, alpha);
}