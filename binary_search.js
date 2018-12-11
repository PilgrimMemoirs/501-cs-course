const binarySearch = (arr, target) => {
  let l = 0, r = (arr.length - 1), mid = Math.floor( (r + l) / 2 );

  if ( arr[mid] == target ) { return mid }
  
  if ( arr[mid] < target ) {
    l = mid;
    mid = Math.floor( (r + l) / 2 );
    
  } else {
    r = mid;
    mid = Math.floor( (r + l) / 2 );
  }
}

console.log( binarySearch([0,2,4,5,5,5,5,5], 5) );