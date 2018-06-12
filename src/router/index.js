import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 这里是重点
const cmsComponents = {
  install: function (Vue) {
      Vue.component('cmsInput', cmsInput);
      Vue.component('cmsButton', cmsButton);
      Vue.component('cmsPagination', cmsPagination);
      Vue.component('cmsBack', cmsBack);
      Vue.component('cmsRole', cmsRole);
      Vue.component('appMain', appMain);
      Vue.component('cmsUpload', cmsUpload);
      Vue.component('cmsSiteTree',cmsSiteTree);
      Vue.component('cmsTree', cmsTree);
      Vue.component('cmsEditor', cmsEditor);
      Vue.component('cmsFileUpload',cmsFileUpload);
      Vue.component('cmsAdvertise', cmsAdvertise);
      Vue.component('cmsChannel', cmsChannel);
      Vue.component('cmsComment', cmsComment);
      Vue.component('cmsContent', cmsContent);
      Vue.component('cmsAttachUpload', cmsAttachUpload);
      Vue.component('cmsMultipleUpload', cmsMultipleUpload);
      Vue.component('cmsPictrues', cmsPictrues);   
      Vue.component('cmsTopic', cmsTopic);  
      Vue.component('cmsTag', cmsTag); 
      Vue.component('cmsSiteDialog', cmsSiteDialog);
      Vue.component('cmsExportUpload', cmsExportUpload);

  }
}

// 导出组件
export default cmsComponents
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
