

function sample_middleware(ctx, next) {   
    // middleware works if you uncomment this
    if (ctx.message.text === 'سلام'){
        ctx.reply('سلام عزیزم') 
    }
    else {
        ctx.reply('برو از رضا بپرس')
    }
}

/* 
    ---- attention ---------------------------------------------
    - you should export each function that you define in object
    - dont forget to use next();
*/

module.exports = {
    sample_middleware,
}

