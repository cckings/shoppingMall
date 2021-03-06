const router = require('koa-router')();
const fs = require('fs');

router.post('/indexPushMessage', async (ctx, next) => {
    var postHtml = await readFile('indexPushMessage.json')
    ctx.body = postHtml;
})
router.post('/classification', async (ctx, next) => {
    var postHtml = await readFile('classification.json')
    ctx.body = postHtml;
})
router.post('/maybeyoulike', async (ctx, next) => {
    var postHtml = await readFile('maybeyoulike.json')
    ctx.body = postHtml;
})

async function readFile(flename) {
    return new Promise((resolve,reject)=>{
        fs.readFile('./postjson/'+flename, function(err, data){
            if(err){
                reject(err)
            }else{
                resolve(data.toString())
            }
        });
    })
}



module.exports = router
