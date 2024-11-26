module.exports = {
    command: ['addbalance', 'addmoney', 'tambahuang'],
    operate: async (context) => {
        const { isCreator, prefix, command, reply, args, OjiOffc } = context;
        if (!isCreator) return reply('*⚠️ Peringatan :* Feature Ini Hanya Untuk Owner Atau Pemilik Bot');

        let user = args[0] + '@s.whatsapp.net';
        if (args[0] && args[1]) {
            if (isNaN(args[0])) return reply(`*⚪ Example : ${prefix + command} 6283170801193 1000*`);
            if (!Object.keys(db.data.users).includes(user)) return reply("⚠️ Nomor Tidak Terdaftar Di Database, Silahkan Masukan Nomor Yang Berada Di Database");
            if (isNaN(args[1])) return reply(`*⚪ Example : ${prefix + command} 6283170801193 1000*`);

            db.data.users[`${user}`].balance += Number(args[1]);
            OjiOffc.sendMessage(context.m.chat, { text: `Berhasil menambah *${args[1]}* ${command} ke ${user.split("@")[0]}` });
        } else {
            return reply(`*⚪ Example : ${prefix + command} 6283170801193 100*`);
        }
    }
};