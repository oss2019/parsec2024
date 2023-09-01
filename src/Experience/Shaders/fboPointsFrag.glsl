uniform vec3 uColor;
uniform float uTime;
uniform int uModel1;
uniform int uModel2;
uniform float uTransitionProgress;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
varying vec3 vPosition;


//for globe
vec3 angleMix(vec3 position){
  
  float pi = asin(1.0) * 2.0;
  float angle = atan(position.z, position.x) + pi;
  float total = pi * 2.0;
  float scale = angle/total;
  float division = fract((scale + 1.0/6.0) * 3.0);
  division *= 6.0;
  division = clamp(division, 0.0, 1.0);
  vec3 color;
  if(angle <= total/6.0){
    color = mix(uColor3, uColor1, division);
  }else if(angle <= total/2.0){
    color = mix(uColor1, uColor2, division);
  }else if(angle <= (5.0*total)/6.0){
    color = mix(uColor2, uColor3, division);
  }else{
    color = mix(uColor3, uColor1, division);
  }
  return color;
}

vec3 chooseColor(int m, vec3 position) {
  vec3 color;

  if(m == 0){
    color = vec3(1.0, 0.0, 1.0);
  } else if (m == 1){
    color = angleMix(position);
  } else {
    color = vec3(0.0, 1.0, 0.0);
  }
  return color * 5.0;
} 


void main() {
  vec3 color1 = chooseColor(uModel1, vPosition);
  vec3 color2 = chooseColor(uModel2, vPosition);
  float distance = distance(gl_PointCoord, vec2(0.5));
  float alpha = distance > 0.5 ? 0.0 : 0.6;

  vec3 colorMix = mix(color1, color2, uTransitionProgress);
  
  
  gl_FragColor = vec4(colorMix, alpha);
}