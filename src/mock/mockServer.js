

/*使用Mockjs模拟数据接口模块       但不需要暴露*/

import Mock from 'mockjs'
import data from './data.json'

/*映射路由*/
Mock.mock('/api2/goods',{    /*Mock 是暴露的对象    mock是对象的方法*/
  code : 0,
  data : data.goods
})

Mock.mock('/api2/ratings',{
  code : 0,
  data : data.ratings
})

Mock.mock('/api2/seller',{
  code : 0,
  data : data.seller
})
