varying float vPointColor;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;


vec3 colorCalc(float index){
  if(index >= 0.0 && index < 1.0){

    return uColor1;

  }else if(index >= 1.0 && index < 2.0){

    return uColor2;
    
  }else{

    return uColor3;

  }
}


void main(){
  vec3 color = vec3(1.0);
  float distance = distance(gl_PointCoord, vec2(0.5));


  // light blink
  float strength = (sin(uTime * (vPointColor)) + 1.0) * 0.5;

  //float alpha = distance > 0.5 ? 0.0 : strength * 1.0 * ((0.5 - distance) * 2.0);
  float alpha = distance > 0.5 ? 0.0 : (strength + 0.1) * 0.7;

  gl_FragColor = vec4(colorCalc(vPointColor), alpha);
}