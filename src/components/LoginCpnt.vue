
<template>
  <div class="container">
    <div id="thewidth">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-tabs type="border-card">
            <el-tab-pane label="登录">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="loginForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="昵称" prop="username">
                  <el-input v-model="ruleForm.username" clearable></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    clearable
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="login_submitForm('loginForm')">提交</el-button>
                  <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="注册">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="registerForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="昵称" prop="username">
                  <el-input v-model="ruleForm.username" autocomplete="off" clearable></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="password">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    clearable
                  ></el-input>
                </el-form-item>

                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    clearable
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="register_submitForm('registerForm')">提交</el-button>
                  <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="修改密码">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="updatePasswordForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="原密码" prop="password">
                  <el-input
                    type="password"
                    v-model="ruleForm.password"
                    autocomplete="off"
                    clearable
                  ></el-input>
                </el-form-item>

                <el-form-item label="新密码" prop="newPassword">
                  <el-input
                    type="password"
                    v-model="ruleForm.newPassword"
                    autocomplete="off"
                    clearable
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="updatePassword_submitForm()">提交</el-button>
                  <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <el-avatar shape="square" :size="192" :src="squareUrl" v-if="!isLogin"></el-avatar>
            <el-avatar shape="square" :size="192" :src="squareUrl2" v-if="isLogin"></el-avatar>

            <div slot="header" class="clearfix">
              <span>用户资料</span>
              <!-- <el-button type="danger" plain>危险按钮</el-button>  -->
              <el-button
                v-if="isLogin"
                style="float: right;padding:3px 0;font-size:14px;"
                type="primary"
                size="small"
                plain
              >登录状态:ON</el-button>

              <el-button
                v-if="!isLogin"
                style="float: right;padding:3px 0;font-size:14px;"
                type="danger"
                size="small"
                plain
              >登录状态:OFF</el-button>
            </div>

            <el-row :gutter="20">
              <el-col :span="1.5">序号：</el-col>
              <el-col :span="1">{{userInfo.uid}}</el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="1.5">昵称：</el-col>
              <el-col :span="1">{{userInfo.username}}</el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="1.5">余额：</el-col>
              <el-col :span="1">{{userInfo.money}}</el-col>
            </el-row>

            <el-row :gutter="20">
              <el-tooltip class="item" effect="dark" content="当用户购买Star成功后即可获得证明" placement="top">
                <el-col :span="1.5" style="cursor: pointer;">证明：</el-col>
              </el-tooltip>
              <el-col :span="1">{{userInfo.certification}}</el-col>
            </el-row>

            <el-button type="success" @click="exitLogin">退出登录</el-button>

            <el-popover placement="top" width="160" v-model="visible">
              <p>你确定要永久删除此账号？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="danger" size="mini" @click="deleteUser">确定</el-button>
              </div>
              <el-button slot="reference" type="danger">删除账号</el-button>
            </el-popover>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
 
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          // this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        newPassword: "",
        checkPass: "",
        username: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      userSession: "",
      userInfo: {
        uid: "",
        username: "",
        money: "",
        certification: ""
      },
      isLogin: false,
      visible: false,
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      squareUrl2:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  },
  created() {
    // this.$http({
    //   method: "get",
    //   url: "/api/user/findAll",
    //   withCredentials: true
    // })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.getUserInfo();
    this.initBussiness();
    this.getBussinessInfo();
  },

  methods: {
    ...mapMutations(["changeLogin"]),

    login_submitForm(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http({
            method: "post",
            url: "/api/user/login",
            withCredentials: true,
            data: this.ruleForm
          })
            .then(res => {
              if (res.data.code === 200) {
                this.getUserInfo();
                this.getBussinessInfo();
                this.isLogin = true;
                this.$message({
                  type: "success",
                  message: "登录成功！",
                  center: true
                });

                // console.log(res);
                //   this.userData = res.data;
                _this.userSession = res.data.session; // 将用户session保存到vuex中
                //   console.log(_this.userToken)
                _this.changeLogin({ Authorization: _this.userSession });
                // _this.$router.push("/login");

                setTimeout(function() {
                  window.location.href = "/login";
                }, 800);
              } else {
                this.$message({
                  type: "error",
                  message: "登录失败！",
                  center: true
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    register_submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http({
            method: "post",
            url: "/api/user/register",
            withCredentials: true,
            data: this.ruleForm
          })
            .then(res => {
              if (res.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "账号注册成功！",
                  center: true
                });
              } else {
                this.$message({
                  type: "error",
                  message: "账号注册失败！",
                  center: true
                });
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          this.$message({
            type: "error",
            message: "账号注册失败！",
            center: true
          });
        }
      });
    },

    updatePassword_submitForm() {
      if (this.isLogin == true) {
        this.$http({
          method: "post",
          url: "/api/user/updatePassword",
          withCredentials: true,
          data: this.ruleForm
        })
          .then(res => {
            if (res.data.code == 200) {
              this.$message({
                type: "success",
                message: "修改密码成功!",
                center: true
              });
            } else {
              this.$message({
                type: "error",
                message: "修改密码失败！",
                center: true
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$message({
          type: "error",
          message: "您还未登录！",
          center: true
        });
      }
    },

    // resetForm() {
    //   // if (this.$refs[formName] !== undefined) {
    //   //   this.$refs[formName].resetFields();
    //   // }
    //   // this.$nextTick(() => {
    //   //   this.$refs.formName.resetFields();
    //   // });
    //   this.ruleForm = "";
    // },

    exitLogin() {
      this.$message({
        type: "success",
        message: "退出登录成功!",
        center: true
      });
      this.userSession = ""; // 将用户session保存到vuex中
      this.changeLogin({ Authorization: this.userSession });
      this.userInfo = "";
      this.isLogin = false;
    },

    getUserInfo() {
      this.$http({
        method: "get",
        url: "/api/user/info",
        withCredentials: true
      })
        .then(res => {
          if (res.data.code == 200) {
            this.isLogin = true;
          }
          this.userInfo.uid = res.data.id;
          this.userInfo.username = res.data.username;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getBussinessInfo() {
      this.$http({
        method: "get",
        url: "/api/bussiness/info",
        withCredentials: true
      })
        .then(res => {
          if (res.data.code == 200) {
            this.isLogin = true;
            this.userInfo.money = "¥" + res.data.money;
            if (res.data.certification === 1) {
              this.userInfo.certification = "有";
            } else if (res.data.certification === 0) {
              this.userInfo.certification = "无";
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    initBussiness() {
      this.$http({
        method: "post",
        url: "/api/bussiness/init",
        withCredentials: true
      })
        .then(res => {
          console.log(res.data);
          console.log(JSON.stringify(this.userInfo));
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteUser() {
      this.visible = false;
      this.$http({
        method: "delete",
        url: "/api/user/deleteUser",
        withCredentials: true
      })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "账号删除成功！",
              center: true
            });
            setTimeout(function() {
              window.location.href = "/login";
            }, 800);
          } else {
            this.$message({
              type: "error",
              message: "账号删除失败！",
              center: true
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
 
<style scoped>
/* 页面背景 */
.container {
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
  /* height: 316px; */
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
.el-avatar {
  position: absolute;
  float: right;
  right: 64px;
}
</style>
