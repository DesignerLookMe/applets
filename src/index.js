/**
 * @file bdparse的组件化入口
 */
const bdParse = require('../bdParse/bdParse');

Component({

    properties: {
        raw: {
            type: String,
            value: '',
            observer(newVal) {
                if (newVal !== '') {
                    bdParse.bdParse('article', this.data.format, this.data.raw, this, this.data.padding);
                }
            }
        },

        format: {
            type: String,
            value: 'html'
        },

        padding: {
            type: Number,
            value: 5
        }
    }

});
