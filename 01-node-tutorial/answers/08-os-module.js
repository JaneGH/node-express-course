const os = require('os')
const user = os.userInfo()
console.log(user)
console.log('OS Platform:', os.platform());
console.log('OS Architecture:', os.arch());