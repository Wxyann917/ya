module.exports = async(conn, sender, chats, from, msg, isGroup) => { 
    conn.suit = conn.suit ? conn.suit : {}
    var botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
    if (roof) {
      let win = ''
      let tie = false
      if (sender == roof.p2 && isGroup && roof.status == "wait" && chats.toLowerCase() == "tolak") {
        conn.sendMessage(from, {text: `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, mentions: [roof.p2]})
        delete conn.suit[roof.id]
        return !0
      }
      if (sender == roof.p2 && chats.toLowerCase() === "terima" && isGroup && roof.status == 'wait') {
        roof.status = 'play'
        roof.asal = from
        clearTimeout(roof.waktu)
        //delete roof[roof.id].waktu
        conn.sendMessage(from, {text: `Pilihan suit telah dikirim oleh bot ke chat pribadi masing-masing player

player 1 : @${roof.p.split("@")[0]}
player 2 : @${roof.p2.split("@")[0]}

pencet link dibawah\nwa.me/${botNumber.split("@")[0]}`, mentions: [roof.p, roof.p2] })
        if (!roof.pilih) conn.sendMessage(roof.p, { text: `Silahkan balas pilihanmu, kamu bisa mengirim balasan *kertas, gunting dan batu*` }, {quoted: msg})
        if (!roof.pilih2) conn.sendMessage(roof.p2, { text: `Silahkan balas pilihanmu, kamu bisa mengirim balasan *kertas, gunting dan batu*` }, {quoted: msg})
        roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) conn.sendMessage(from, {text: "Kedua pemain tidak memilih suit apapun, suit pvp dibatalkan."})
            else if (!roof.pilih || !roof.pilih2) {
              win = !roof.pilih ? roof.p2 : roof.p
              conn.sendMessage(from, {text: `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game selesai.`, mentions: [roof.p, roof.p2]})
            }
            delete conn.suit[roof.id]
            return !0
        }, roof.timeout)
      }
      let jwb = sender == roof.p
      let jwb2 = sender == roof.p2
      let g = /gunting/i
      let b = /batu/i
      let k = /kertas/i
      let reg = /^(gunting|batu|kertas)/i
      if (jwb && reg.test(chats) && !roof.pilih && !isGroup) {
        roof.pilih = reg.exec(chats.toLowerCase())[0]
        roof.text = chats
        conn.reply(from,`Kamu telah memilih ${chats} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`, msg)
        if (!roof.pilih2) conn.sendMessage(roof.p2, {text: 'Lawan sudah memilih, ayo pilih pilihan kamu sekarang!'})
      }
      if (jwb2 && reg.test(chats) && !roof.pilih2 && !isGroup) {
        roof.pilih2 = reg.exec(chats.toLowerCase())[0]
        roof.text2 = chats
        conn.reply(from, `Kamu telah memilih ${chats} ${!roof.pilih ? `\nMenunggu lawan memilih` : ''}`, msg)
        if (!roof.pilih) conn.sendMessage(roof.p, {text: 'Lawan sudah memilih, ayo pilih pilihan kamu sekarang!'})
      }
      let stage = roof.pilih
      let stage2 = roof.pilih2
      if (roof.pilih && roof.pilih2) {
        clearTimeout(roof.waktu_milih)
        if (b.test(stage) && g.test(stage2)) win = roof.p
        else if (b.test(stage) && k.test(stage2)) win = roof.p2
        else if (g.test(stage) && k.test(stage2)) win = roof.p
        else if (g.test(stage) && b.test(stage2)) win = roof.p2
        else if (k.test(stage) && b.test(stage2)) win = roof.p
        else if (k.test(stage) && g.test(stage2)) win = roof.p2
        else if (stage == stage2) tie = true
        var mng = `${tie ? 'Seri' : roof.p == win ? `@`+roof.p.split("@")[0]+` *Menang*` : `@`+roof.p2.split("@")[0]+ ` *Menang*`}`
        conn.sendMessage(roof.asal, {text: `*PERMAIN SELESAI*\n\nHasil Suit ${mng}\n
@${roof.p.split`@`[0]} memilih ${roof.text}
@${roof.p2.split`@`[0]} memilih ${roof.text2}

ingin bermain lagi? ketik #suitpvp @tag`.trim(), mentions: [roof.p, roof.p2] }, {quoted: msg})
        delete conn.suit[roof.id]
      }
    }
}
