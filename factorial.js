function fact(x) {
  if(x == 0) {
    return 1;
  }
  if(x < 0 ) {
    return undefined;
  }
  for(var i = x; --i; ) {
    x *= i;
  }
  return x;
}

fact(5)
