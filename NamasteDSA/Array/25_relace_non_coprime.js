// 2197. Replace Non-Coprime Numbers in Array
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}
function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs((a / gcd(a, b)) * b);
}

var replaceNonCoprimes = function(nums) {
  const st = [];
  for (const x of nums) {
    let cur = x;
    // keep merging with the top while non-coprime
    while (st.length) {
      const g = gcd(st[st.length - 1], cur);
      if (g === 1) break;
      cur = lcm(st.pop(), cur);
    }
    st.push(cur);
  }
  return st;
};