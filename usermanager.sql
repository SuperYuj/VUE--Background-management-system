/*
 Navicat Premium Data Transfer

 Source Server         : usermanager
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : usermanager

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 12/04/2019 12:55:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for productlist
-- ----------------------------
DROP TABLE IF EXISTS `productlist`;
CREATE TABLE `productlist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `shop` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商店名称',
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片地址',
  `product` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '产品名称',
  `price` decimal(10, 2) NOT NULL COMMENT '产品价格',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of productlist
-- ----------------------------
INSERT INTO `productlist` VALUES (1, '张姐烤肉饭脆皮饭', '/upload1/1.webp', '黑椒脆皮鸡+时蔬+米饭', 18.00);
INSERT INTO `productlist` VALUES (2, '和风食堂(万达店)', '/upload1/2.webp', '照烧猪排饭套餐', 25.00);
INSERT INTO `productlist` VALUES (3, '三个先森的韩国炸鸡(茶南店)', '/upload1/3.webp', '辣味往事炸鸡中份', 27.00);
INSERT INTO `productlist` VALUES (4, '必胜客宅急送（南京南湖店）', '/upload1/4.webp', '超级至尊比萨S[芝心]', 94.00);
INSERT INTO `productlist` VALUES (5, '陈记状元拌面（集庆门大街店）', '/upload1/5.webp', '黑椒牛肉状元面', 38.00);
INSERT INTO `productlist` VALUES (6, '丽塔丝烤猪蹄（狮子桥）', '/upload1/6.webp', '招牌烤猪蹄', 25.00);
INSERT INTO `productlist` VALUES (7, '老妈烫饭(新街口店)', '/upload1/7.webp', '酸菜肥牛烫饭', 35.00);
INSERT INTO `productlist` VALUES (8, '潘记粥铺', '/upload1/8.webp', '皮蛋鸡丝粥', 16.00);
INSERT INTO `productlist` VALUES (9, '七星椒菜馆', '/upload1/9.webp', '酸菜鱼', 28.00);
INSERT INTO `productlist` VALUES (12, '22', '/upload1/head-1554563028110.png', '22', 11.00);
INSERT INTO `productlist` VALUES (13, '333', '/upload1/head-1554885171966.png', '3333', 589.00);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `headurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 51 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '王五', '123', '');
INSERT INTO `user` VALUES (4, '从旁', '123', '/upload1/head-1547696556513.png');
INSERT INTO `user` VALUES (6, 'dqwddqw', 'dqw', '/upload1/head-1547692633912.png');
INSERT INTO `user` VALUES (7, 'eqweq', 'e12e', '/upload1/head-1547693163375.png');
INSERT INTO `user` VALUES (23, 'eq3edq', 'eqe', '/upload1/head-1547709453775.png');
INSERT INTO `user` VALUES (24, 'dqwdw', 'dqw', '/upload1/head-1547709484946.png');
INSERT INTO `user` VALUES (25, 'dwqwd', 'dqw', '/upload1/head-1547709493602.png');
INSERT INTO `user` VALUES (26, '王五', 'dwqd', '/upload1/head-1547709501949.png');
INSERT INTO `user` VALUES (27, '瓦工', '123', '/upload1/head-1547797801305.png');
INSERT INTO `user` VALUES (28, 'dqwddqw', 'dqwq', '/upload1/head-1547798581821.png');
INSERT INTO `user` VALUES (29, '王五', '202cb962ac59075b964b07152d234b70', '/upload1/head-1548138914213.png');
INSERT INTO `user` VALUES (30, '3333', '310dcbbf4cce62f762a2aaa148d556bd', NULL);
INSERT INTO `user` VALUES (31, '王二', '202cb962ac59075b964b07152d234b70', NULL);
INSERT INTO `user` VALUES (33, 'dqwdqdqw', 'f52ab92457b1a97c1dbbc794de8dea8e', NULL);
INSERT INTO `user` VALUES (34, '123', '2f4967df8405a049421b1f440bee8354', NULL);
INSERT INTO `user` VALUES (38, '第七', '7363a0d0604902af7b70b271a0b96480', '/upload1/head-1552397131873.png');
INSERT INTO `user` VALUES (40, '王三', '202cb962ac59075b964b07152d234b70', '/upload1/head-1552534437002.png');
INSERT INTO `user` VALUES (42, '222', '202cb962ac59075b964b07152d234b70', '/upload1/head-1554515070694.png');
INSERT INTO `user` VALUES (43, '222', '3049a1f0f1c808cdaa4fbed0e01649b1', '/upload1/head-1554514988977.png');
INSERT INTO `user` VALUES (49, '444', '202cb962ac59075b964b07152d234b70', '/upload1/head-1554525272067.png');
INSERT INTO `user` VALUES (50, 'kkk', '202cb962ac59075b964b07152d234b70', '/upload1/head-1554560032905.png');

SET FOREIGN_KEY_CHECKS = 1;
