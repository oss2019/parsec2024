varying float vRandom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;


vec3 randomColorCalc(float random){
  if(random >= 0.0 && random < 1.0){
    return uColor1;
  }else if(random >= 1.0 && random < 2.0){
    return uColor2;
  }else{
    return uColor3;
  }
}

vec3 model_color(int model_index, vec3 position, float time){
  if(model_index == 0){
    return randomColorCalc(vRandom);
  }
  vec3 color = uColor;
  return color;
}

float alpha_shape(vec2 point_cord, float alpha){
  //particle center at (0.5, 0.5)
  //by default circular particles
  //for square particles remove the below code and just return alpha
  float dist = distance(point_cord, vec2(0.5));
  float radius = 0.2;
  float res;
  if(dist > 0.5){
    res = 0.0;
  }else if(dist >= radius && dist <= 0.5){
    res = 1.0 - smoothstep(radius, 0.5, dist);
  }else{
    res = 1.0;
  }
  // light blink
  float strength = (sin(uTime * (vRandom)) + 1.0) * 0.5;
  res = res * (strength + 0.1);
  return res * alpha;
}
