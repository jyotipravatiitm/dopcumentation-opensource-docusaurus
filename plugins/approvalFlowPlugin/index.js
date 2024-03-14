// plugins/approvalFlowPlugin/index.js
const path = require('path');

module.exports = function (context, options) {
    return {
        name: 'docusaurus-approval-flow-plugin',
        async contentLoaded({content, actions}) {
            const {addRoute} = actions;

            addRoute({
                path: '/approve',
                component: path.resolve(__dirname, 'ApproveDoc.js'),
                // Additional route options if needed
            });
        },
    };
};
