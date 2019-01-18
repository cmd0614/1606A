<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
  export default {
    data: function () {
      return {
        chartData: {
          columns: [],
          rows: []
        }
      }
    },
    created(){
      fetch('http://123.206.55.50:15000/users/commit')
      .then(res=>res.json())
      .then(body=>{
        // 整理数据,把十二个月份的数据合到一个对象里就行了
        let data = body[0].commit;
        data.forEach((item, index)=>{
          let date = item.date;
          for (let i=1;i<=12;i++){
             item[`${i}月`] =  body[i-1].commit[date-1] && body[i-1].commit[date-1].commit;
          }
          // 删除commit
          delete item.commit;
        })
        // data.unshift({});
        this.chartData = {
          columns: ['date', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          rows: data
        }
      })
    }
  }
</script>
