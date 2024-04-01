<template>
  <div>
    
  </div>
</template>
<script src="https://my.openwrite.cn/js/readmore.js" type="text/javascript"></script>
<script>
    const btw = new BTWPlugin();
    btw.init({
      id: 'container',
      blogId: '31809-1711934972129-598',
      name: 'JavaEdge',
      qrcode: 'https://javaedge-1256172393.cos.ap-shanghai.myqcloud.com/qrcode_for_gh_ab5f6d46c1ff_258.jpg',
      keyword: '编程严选网',
    });
    // 加英文版翻译
    const readMoreBtn = document.querySelector('#read-more-btn');
    const addEnglish = () => {
        const element = document.querySelector('#btw-modal-header');
        element.innerHTML = element.innerHTML + `<p id="btw-modal-header-en" style="margin-top: 10px; line-height: 1.8; font-size: 13px; color: #0085a1;">
            Scan the QR code to follow the WeChat public account: <strong>岚坤爷</strong><br>
            Send message:<strong> vip</strong><br>
            Get a verification code that permanently unlocks all articles on this site`;
        const input = document.querySelector('#btw-modal-input');
        input.setAttribute('placeholder', '请输入验证码 Input verification code');
        const submit = document.querySelector('#btw-submit-btn');
        submit.innerHTML = '提交 Submit';
    };

    readMoreBtn.addEventListener('click', () => {
        setTimeout(addEnglish, 10);
    });
</script>
<script>
  export default {
    name: 'HideArticle',
    data() {
      return {

      }
    },

    mounted() {

    }
  }
</script>


<style lang="scss" scoped>

</style>