var print = function(head) {
  if (head === null) return;
  console.log(head.data);
  print(head.next);
};
