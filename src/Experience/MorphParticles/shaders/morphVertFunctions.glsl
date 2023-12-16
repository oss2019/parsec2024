attribute vec3 aRandom;

vec3 position_calc(vec3 pos, float time){
  pos.x += sin(time * aRandom.x) * 0.02;
  pos.y += cos(time * aRandom.y) * 0.02;
  pos.z += sin(time * aRandom.z) * 0.02;
  return pos;
}

float point_size(float distance_from_camera, float time){
  //float adjustedPointSize = 10.0 * pow(2.0, -distance_from_camera);
  float adjustedPointSize = 2.0/distance_from_camera;
  float size = uPointSize * adjustedPointSize;
  return size;
}