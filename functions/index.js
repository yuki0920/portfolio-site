// NOTE: CommonJS(サーバーサイド環境)のモジュールインポート
const functions = require('firebase-functions')
const nodemailer = require("nodemailer")
// NOTE: 環境変数設定
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const adminEmail = functions.config().admin.email

// NOTE: 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

// NOTE: 管理者用のメールテンプレート
const adminContents = data => {
  return `以下内容でホームページよりお問い合わせを受けました。

お名前：
${data.name}

メールアドレス：
${data.email}

内容：
${data.contents}
`
}

// NOTE: CommonJSのモジュールエキスポート
exports.sendMail = functions.https.onCall(async (data, context) => {
  // NOTE: メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  }
  // NOTE: 管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail)
  } catch (error) {
    console.error(`Send failed. ${error}`)
    throw new functions.https.HttpsError('internal', 'Send failed')
  }
})
