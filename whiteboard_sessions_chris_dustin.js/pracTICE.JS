var A = {
  leftX: 0,
  bottomY:0,
  width: 5,
  height: 2
};

var B = {
  leftX: 1,
  bottomY:1,
  width: 5,
  height: 3
};

var findIntersection = function(rec1, rec2) {
  if (rec1.bottomY < rec2.bottomY) {
    var intersectRec1 = {
      leftX: rec2.leftX,
      bottomY: rec2.bottomY,
      width: rec1.leftX + rec1.width - rec2.leftX,
      height: rec2.bottomY + rec2.height - rec1.bottomY + rec1.height
    };
    return intersectRec1;
  } else if (rec1.bottomY > rec2.bottomY) {
    var intersectRec = {
      leftX: rec2.leftX,
      bottomY: rec1.bottomY,
      width: rec1.leftX + rec1.width - rec2.leftX,
      height: rec2.bottomY + rec2.height - rec1.bottomY
    };
    return intersectRec;
  }
};

var something = findIntersection(A,B);

console.log(something);
