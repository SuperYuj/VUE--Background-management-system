var query = require('../utils/querydb');
// 添加商品类型界面
exports.addtype = function (req, res, next) {
    res.render('product/addtype');
};
// 添加商品类型提交
exports.addtypesub = async function (req, res, next) {
    var name = req.body.productname;
    try {
        var sql = 'insert into product_type (name) values(?)';
        console.log(name);
        await query(sql, [name]);
        res.send('数据添加成功');
    } catch (err) {
        next(err);
    }
};
// 添加商品界面
exports.addproduct = async function (req, res, next) {
    var sql = 'select pid,name from product_type';
    var data = await query(sql);
    res.render('product/add', {type: data});
};
// 添加商品信息提交
exports.addproductsub = async function (req, res, next) {
    var shop = req.body.shop;
    var picture = req.body.picture;
    var product = req.body.product;
    var price = req.body.price;
    try {
        var sql = 'insert into productlist (shop,picture,product,price)values(?,?,?,?)';
        var parmeter = [shop, picture, product, price];
        await query(sql, parmeter);
        res.send({
            resultCode: 1,
            resultInfo: 'ok',
        });
    } catch (err) {
        next(err);
    }

};
// 商品列表界面
exports.productlist = async function (req, res, next) {
    try {
        var sql = 'select id,shop,picture,product,price from productlist';
        var productlist = await query(sql);
        if (productlist !== null && productlist.length > 0) {
            res.send({
                resultCode: 1,
                resultInfo: productlist,
            });
        } else {
            res.send({
                resultCode: -1,
                resultInfo: '没有信息',
            });
        }

    } catch (err) {
        next(err);
    }
};
// 删除商品
exports.productdelete = async function (req, res, next) {
    try {
        var sql = 'delete from productlist where id=?';
        var id = req.query.id;
        await query(sql, [id]);
        res.send({
            resultCode: 1,
            resultInfo: 'ok',
        });
    } catch (err) {
        next(err);
    }
};
// 商品查询
exports.productupdate = async function (req, res, next) {
    try {
        var id = req.query.uid;
        var sql1 = 'select id,shop,picture,product,price from productlist where id=?';
        var parmeter = [id];
        var data = await query(sql1, parmeter);
        res.send({
            resultInfo: data[0],
        });
    } catch (err) {
        next(err);
    }
};
// 商品更新提交
exports.productupdatesub = async function (req, res, next) {
    var id = req.body.id;
    var shop = req.body.shop;
    var picture = req.body.picture;
    var product = req.body.product;
    var price = req.body.price;
    console.log('传过来的id' + id);
    try {
        var sql = 'update productlist set shop=?,picture=?,product=?,price=? where id=?';
        var parmeter = [shop, picture, product, price, id];
        await query(sql, parmeter);
        res.send({
            resultCode: 1,
            resultInfo: '修改成功',
        });
    } catch (err) {
        next(err);
    }
};
