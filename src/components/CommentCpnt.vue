
<template>
  <div class="container">
    <el-table :data="tableData" border style="width: 80%;">
      <el-table-column prop="id" label="评论ID" width="70"></el-table-column>
      <el-table-column prop="uid" label="用户ID" width="70"></el-table-column>
      <el-table-column prop="username" label="用户昵称" width="100"></el-table-column>
      <el-table-column prop="comment" label="评论内容" width="800"></el-table-column>
      <el-table-column fixed="right" label width="100">
        <template slot-scope="scope">
          <el-button @click="deleteComment(scope.row)" type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      commentId: { id: null },
      tableData: [],
      isLogin: false
    };
  },
  created() {
    this.getAllComment();
  },

  methods: {
    deleteComment(row) {
      if (localStorage.getItem("Authorization")) {
        this.commentId.id = row.id;
        console.log(row.id);
        this.$http({
          method: "post",
          url: "/api/comment/delete",
          withCredentials: true,
          data: this.commentId
        })
          .then(res => {
            console.log(res.data);
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "评论删除成功！",
                center: true
              });
              setTimeout(function() {
                window.location.href = "/comment";
              }, 800);
            } else {
              this.$message({
                type: "error",
                message: "评论删除失败！",
                center: true
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.openLoginTip();
      }
    },
    getAllComment() {
      this.$http({
        method: "get",
        url: "/api/comment/findAll",
        withCredentials: true
      })
        .then(res => {
          if (res.data.code == 200) {
            this.isLogin = true;
            this.tableData = res.data.extend.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    openLoginTip() {
      this.$alert("请先登录！", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          console.log(action);
          setTimeout(function() {
            window.location.href = "/login";
          }, 800);
        }
      });
    }
  }
};
</script>
 
<style scoped>
/* 页面背景 */
.container {
  padding: 5% 10%;
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/star.png");
}

#thewidth {
  margin: 15% 10%;
}

.el-tabs {
  /* margin: 5% 10% 0 10%; */
  border-radius: 4px;
}

.el-card {
  /* margin: 1% 10%; */
  border-radius: 4px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
