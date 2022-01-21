import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';

const options = {
    color: '#38a1da',
    failedColor: '#874b4b',
    thickness: '4px',
};
export default options;
Vue.use(VueProgressBar, options);