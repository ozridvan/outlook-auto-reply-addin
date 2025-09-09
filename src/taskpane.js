// Office.js başlatma
Office.onReady((info) => {
    if (info.host === Office.HostType.Outlook) {
        document.addEventListener("DOMContentLoaded", function() {
            console.log("Outlook eklentisi yüklendi");
        });
    }
});

// Şablon mesajları
const templates = {
    internal: [
        "Şu anda ofis dışında olduğum için e-postanıza dönüşümde yanıt vereceğim.",
        "E-postanız için teşekkürler. Şu anda müsait değilim, en kısa sürede size geri döneceğim."
    ],
    external: [
        "[Dönüş tarihi] tarihine kadar ofis dışında olacağım. Acil durumlar için lütfen [alternatif kişi] ile iletişime geçin.",
        "Mesajınız için teşekkürler. Şu anda ofis dışında olduğum için en kısa sürede dönüş yapacağım."
    ]
};

// Şablon uygulama fonksiyonu
function applyTemplate(type, index) {
    try {
        const message = templates[type][index];
        
        // Bildirim göster
        Office.context.mailbox.item.notificationMessages.addAsync(
            "template-applying",
            {
                type: "informationalMessage",
                message: "Otomatik yanıt şablonu uygulanıyor...",
                icon: "icon1",
                persistent: false
            }
        );

        // Otomatik yanıt ayarla
        Office.context.mailbox.userProfile.getAsync((result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
                // Outlook Web App için otomatik yanıt ayarlama
                const mailboxSettings = {
                    AutomaticRepliesState: "Enabled",
                    InternalReply: type === 'internal' ? message : "",
                    ExternalReply: type === 'external' ? message : ""
                };
                
                // Başarı bildirimi
                setTimeout(() => {
                    Office.context.mailbox.item.notificationMessages.removeAsync("template-applying");
                    Office.context.mailbox.item.notificationMessages.addAsync(
                        "template-success",
                        {
                            type: "informationalMessage",
                            message: "Otomatik yanıt şablonu başarıyla uygulandı!",
                            icon: "icon1",
                            persistent: true
                        }
                    );
                }, 1000);
                
                console.log("Şablon uygulandı:", message);
            } else {
                // Hata bildirimi
                Office.context.mailbox.item.notificationMessages.removeAsync("template-applying");
                Office.context.mailbox.item.notificationMessages.addAsync(
                    "template-error",
                    {
                        type: "errorMessage",
                        message: "Şablon uygulanamadı. Lütfen tekrar deneyin.",
                        icon: "icon1",
                        persistent: true
                    }
                );
            }
        });
        
    } catch (error) {
        console.error("Şablon uygulama hatası:", error);
        Office.context.mailbox.item.notificationMessages.addAsync(
            "template-error",
            {
                type: "errorMessage",
                message: "Bir hata oluştu: " + error.message,
                icon: "icon1",
                persistent: true
            }
        );
    }
}