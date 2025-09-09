document.addEventListener("DOMContentLoaded", function() {
    const internalReplyButton = document.getElementById("internal-reply");
    const externalReplyButton = document.getElementById("external-reply");
    const applyButton = document.getElementById("apply-template");
    const messageDisplay = document.getElementById("message-display");

    const internalMessages = [
        "Şu anda ofis dışında bulunuyorum, e-postanıza en kısa sürede dönüş yapacağım.",
        "E-postanız için teşekkürler. [dönüş tarihi] tarihine kadar ofis dışında olacağım."
    ];

    const externalMessages = [
        "Mesajınız için teşekkürler. Şu anda ofis dışında bulunuyorum ve dönüşümde size yanıt vereceğim.",
        "E-postanız için teşekkür ederim. [dönüş tarihi] tarihine kadar ofis dışında olacağım ve size en kısa sürede geri döneceğim."
    ];

    internalReplyButton.addEventListener("click", function() {
        const randomMessage = internalMessages[Math.floor(Math.random() * internalMessages.length)];
        messageDisplay.value = randomMessage;
    });

    externalReplyButton.addEventListener("click", function() {
        const randomMessage = externalMessages[Math.floor(Math.random() * externalMessages.length)];
        messageDisplay.value = randomMessage;
    });

    applyButton.addEventListener("click", function() {
        const message = messageDisplay.value;
        Office.context.mailbox.item.notificationMessages.addAsync("Şablon uygulanıyor...", { type: "informational" });
        Office.context.mailbox.item.replyAllAsync(message, { asyncContext: "Bu, callback'e iletilen isteğe bağlı veridir" }, function(asyncResult) {
            if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
                Office.context.mailbox.item.notificationMessages.removeAsync("Şablon uygulanıyor...");
                Office.context.mailbox.item.notificationMessages.addAsync("Şablon başarıyla uygulandı!", { type: "informational" });
            } else {
                Office.context.mailbox.item.notificationMessages.removeAsync("Şablon uygulanıyor...");
                Office.context.mailbox.item.notificationMessages.addAsync("Şablon uygulanamadı.", { type: "error" });
            }
        });
    });
});