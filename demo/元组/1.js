// 无组类型，严格约束数组成员的数量，类型，位置
var IdAndName;
IdAndName = ['xz']; // 报错，参数类型不符
IdAndName = [1]; // 报错，减少参数
IdAndName = [1, 'a', 1, 1]; // 报错，减少参数
IdAndName = [1, 'a', 1]; // 正确
IdAndName = [1, 'a']; // 正确
