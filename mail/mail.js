function acceptMail(mail) {
    if (!mail.includes("@")) {
      throw new Error("Mail must have '@'");
    } else if (mail.includes("$" || "!" || "?" || "&")) {
      throw new Error("Mail must not includes '$','!','?','&'");
    } else if (!mail.includes(".")) {
      throw new Error("Mail must have '.'");
    } else {
      return mail;
    }
  }
  
  module.exports = { acceptMail };