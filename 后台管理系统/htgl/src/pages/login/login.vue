<template>
  <div class="login">
    <div class="con">
      <h3>登录</h3>
      <el-input v-model="user.username" class="input" placeholder="请输入账号" clearable></el-input>
      <el-input v-model="user.password" class="input" placeholder="请输入密码" clearable show-password></el-input>
      <div class="btn-box">
        <el-button type="primary" @click="login()">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { requestLogin } from "../../util/request";
import { successAlert, warningAlert } from "../../util/alert";
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      requestLogin(this.user).then((res) => {
        if (res.data.code == 200) {
          successAlert(res.data.msg);
          this.$router.push("/");
          return;
        } else {
          warningAlert(res.data.msg);
          this.user = "";
        }
      });
    },
  },
  mounted() {},
};
</script>
<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #553444, #303d60);
}
.con {
  width: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
h3 {
  line-height: 60px;
  font-size: 30px;
  text-align: center;
}
.input {
  margin-bottom: 20px;
}
.btn-box {
  width: 100%;
  text-align: center;
}
.btn-box .el-button{
  width: 100%;
}
</style>