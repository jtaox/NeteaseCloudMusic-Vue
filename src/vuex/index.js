import Vue from 'vue'
import Vuex from 'vuex';

import recommend from './recommend'
import common from './common'
import detail from './detail'

import toolbar from './toolbar'

import lrcTask from "./lrcTask"

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        recommend, common, detail, toolbar, lrcTask
    }
})