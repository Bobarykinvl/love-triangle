/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var trianglesCount = 0;
		for(var i = 0; i < preferences.length; i++){
			if(preferences[preferences[preferences[i]-1]-1]-1 == i){
				trianglesCount++;
			}
		}
	return Math.floor(trianglesCount/3);
	
  
};
