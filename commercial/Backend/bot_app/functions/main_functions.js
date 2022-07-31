
module.exports = new class sample_function {
    ctx_message(ctx) {
        console.log(ctx)
        ctx.reply("این فانکشن داره کار میکنه")
    }

    introduce_me(ctx){
        ctx.reply(`یوزرنیمت اینه: ${ctx.from.username}`)
        ctx.reply(`اسمت اینه: ${ctx.from.first_name}`)
        ctx.reply(`فامیلت اینه: ${ctx.from.last_name}`)
    }
}
