attribute float aRandom;
varying float vRandom;

vec3 position_calc(vec3 pos, float time){
  return pos;
}


float point_size(float distance_from_camera, float time){
  //float adjustedPointSize =  200.0 / distance_from_camera + 5.0;
  float exponent = 1.7;
  float adjustedPointSize = clamp(150.0 * pow((distance_from_camera), -exponent), 0.4, 100.0);
  float size = uPointSize * adjustedPointSize;
  vRandom = aRandom;
  return size;
}

