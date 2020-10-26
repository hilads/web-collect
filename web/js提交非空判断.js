import message from 'ant-design-vue/es/message'
//1. 写一个通用是否为空的函数
function isDefine(str) {
  if (str == null || str == '' || str == undefined || str == NaN) {
    return false
  };
  return true;
}


//2. 如果为空则提示并返回
function prompt(value, msg) {
  if (!isDefine(value)) {
    // Toast.info(msg, 1); //Toast 是 antd mobile 提供的一个提示函数，测试的话可以用alert。
    message.warning(msg, 1)
    alert(msg)
    return false
  } else {
    return true
  }
}


function* verify(arr) {
  for (var i = 0; i < arr.length; i++) {
    yield prompt(arr[i].value, arr[i].msg);
  }
  //Generator 函数需要return之后才算真正结束
  return;
}


//通过递归执行分段函数
function doNext(bool, cb) {
  //先执行第一个分段函数
  var x = bool.next();
  console.log('x', x)
  if (x.value) {
    //当 value 值为 true 时（也就是非空的时候），再执行下一个分段函数
    doNext(bool, cb);
  } else {
    if (x.done && cb) {
      //分段函数执行完毕之后执行回调
      cb();
    }
  }
}


function checkParam(arr, cb) {
  //Generator 函数需要调用一次才能执行（后面通过 next 执行）。
  var bool = verify(arr);
  console.log('bool', bool)
  doNext(bool, cb);
}

function getData() {
  //arr 为数组，数组中对象的属性有两个，一个是需要校验的值，一个是提示的内容。
  var arr = [{
      value: this.state.userName,
      msg: "请输入用户名",
    },
    {
      value: this.state.mobile,
      msg: "请输入手机号",
    },
    {
      value: this.state.smsCode,
      msg: "请输入验证码",
    },
  ];
  //调用 final 函数，将 arr 数组作为该函数的第一个参数，参数非空校验完毕之后执行回调。
  checkParam(arr, function () {
    console.log("校验成功，已没有非空参数");
  });
}


export default checkParam;
