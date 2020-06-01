<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border width="100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column prop="price" label="金额" width="50"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="delSingGoods(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div>
              <span class="goodsCount">数量: {{goodsCount}}</span>
              <span class="goodsMoney">金额: {{goodsMoney}}</span>
            </div>
            <div class="three-row-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods">删除</el-button>
              <el-button type="success" @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList" v-for="goods in type0Goods" @click="addOrderList(goods)">
                  <li>
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div>
                <ul class="cookList" v-for="goods in type1Goods" @click="addOrderList(goods)">
                  <li>
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div>
                <ul class="cookList" v-for="goods in type2Goods" @click="addOrderList(goods)">
                  <li>
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div>
                <ul class="cookList" v-for="goods in type3Goods" @click="addOrderList(goods)">
                  <li>
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pos",
  data: function() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      goodsCount: 0,
      goodsMoney: 0
      /* 
            // 前期用于布局设置的数据=》后期转为RAP2平台接口数据
            tableData:[{
            goodsName: '可口可乐',
            price: 8,
            count:1
            }, {
            goodsName: '香辣鸡腿堡',
            price: 15,
            count:1
            }, {
            goodsName: '爱心薯条',
            price: 8,
            count:1
            }, {
            goodsName: '甜筒',
            price: 8,
            count:1
            }],

            oftenGoods:[{
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }],
          type0Goods:[
                {
                    goodsId:1,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'香脆鸡柳',
                    price:17
                }

            ], */
    };
  },
  created: function() {
    axios
      .get("http://rap2.taobao.org:38080/app/mock/256192/example/1590973300654")
      .then(response => {
        // console.log(response)
        this.oftenGoods = response.data.oftenGoods;
        // this.tableData = response.data.tableData
      })
      .catch(error => {
        alert("网络错误,不能访问");
      });
    axios
      .get(
        "https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods"
      )
      .then(reponse => {
        // console.log(reponse)

        this.type0Goods = reponse.data[0];
        this.type1Goods = reponse.data[1];
        this.type2Goods = reponse.data[2];
        this.type3Goods = reponse.data[3];
      })
      .catch(error => {
        // console.log(error)
        alert("网络错误，不能访问");
      });
  },
  mounted: function() {
    var orderHight = document.documentElement.clientHeight;
    // console.log(orderHight+"mounted执行了");
    document.getElementById("order-list").style.height = orderHight + "px";
  },
  methods: {
    addOrderList(goods) {
      // 商品价格汇总
      this.goodsMoney = 0;
      this.goodsCount = 0;

      // 商品是否已经存在
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHave = true;
        }
      }

      // 根据判断的值写业务逻辑
      if (isHave) {
        let arr = this.tableData.filter(_ => _.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney()
      // 商品数量与价格计算
      // this.tableData.forEach((element)=>{
      //     this.goodsCount += element.count
      //     this.goodsMoney = this.goodsMoney+(element.price*element.count);
      // })
    },
    delSingGoods(goods) {
      this.tableData = this.tableData.filter(_ => _.goodsId != goods.goodsId);
      this.getAllMoney()
    },
    // 删除所有商品
    delAllGoods(){
        this.tableData=[];
        this.goodsCount=0;
        this.goodsMoney=0;
    },
    // 模拟结账
    checkout(){ 
        if(this.goodsCount!=0){
            this.tableData=[];
            this.goodsCount=0;
            this.goodsMoney=0;
            this.$message({
                message:'结账成功',
                type:'success'
            })
        }else{
            this.$message.error("不能空结")
        }
    },

    // 汇总数量金额改
    getAllMoney() {
      this.goodsCount = 0;
      this.goodsMoney = 0;
      if (this.tableData) {
        this.tableData.forEach(element => {
          this.goodsCount += element.count;
          this.goodsMoney = this.goodsMoney + element.price * element.count;
        });
      }
    }
  }
};
</script>

<style>
.el-tabs__nav-scroll {
  /* padding-left: 25px; */
  display: flex;
  justify-content: center;
}
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.three-row-btn {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.goods-type .el-tabs__nav-scroll {
  display: flex;
  justify-content: start;
  padding-left: 10px;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li {
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.goodsMoney {
  margin-left: 37px;
}
</style>