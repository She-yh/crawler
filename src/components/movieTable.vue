<template>
  <div id="movieTable">
      <el-table :data="tableData" :default-sort="{ prop: 'score', order: 'descending' }">
        <el-table-column prop="cname" label="电影名" width="150px">
          <template #default="scope">
            <a :href="scope.row['link']">{{scope.row["cname"]}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="score" label="评分" width="60px"/>
        <el-table-column prop="intro" label="介绍"/>
        <el-table-column prop="info" label="信息"/>
      </el-table>
  </div>
</template>

<script>
import {data} from './options'
export default {
  name: 'movieTable',
  data(){
    return {
      tableData:data,
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  color: rgb(0, 145, 255);
  text-decoration: none;
}
#movieTable{
  position: absolute;
  top: 30vh;
  max-width: 980px;
  min-width: 300px;
  width: 100%;
  box-shadow: 0 0 15px 10px rgba(0,0,0,0.12);
}
#movieTable::before{
  content:'豆瓣TOP250';
  position:absolute;
  left:50%;
  font-size: 40px;
  top: -45px;
  transform: translateX(-50%);
}
</style>
