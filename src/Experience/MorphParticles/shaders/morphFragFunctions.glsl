uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;

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



vec3 distanceMix(vec3 position){
  float width = 0.5;
  float h = 0.2;
  return mix(mix(uColor2, uColor3, smoothstep(h , h+width ,abs(position.y))), mix(uColor2, uColor1, smoothstep(h, h + width, position.y)), step(0.0, position.y));
}


vec3 logoMix(vec3 position){
  float dist = distance(position, vec3(0));
  if(dist > 0.21){
    return uColor4;
  }else{
    return uColor3;
  }
}


vec3 model_color(int model_index, vec3 position, float time)
{
  if(model_index == 0){
    return angleMix(position);
  }
  if(model_index == 1){
    return distanceMix(position);
  }
  if(model_index == 2){
    return logoMix(position);
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
  
  return res * alpha;
}