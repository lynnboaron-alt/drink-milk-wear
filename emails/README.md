# Emails

## preorder-shipping-week.html
Notifies pre-order customers that their order shipped to the courier this week. Editorial layout, DRINK MILK brand colors, subtle Ken Burns motion on the hero (degrades to a static image in clients without CSS animation support, e.g. Outlook desktop).

Before sending, upload the files in `assets/` to your ESP's media library or a CDN, then replace these placeholders in the HTML with the resulting URLs:

- `{{URL_LOGO}}` → `assets/logo.png`
- `{{URL_HERO}}` → `assets/hero-box.jpg`
- `{{URL_LOOK_01}}` → `assets/look-01.jpg`
- `{{URL_LOOK_02}}` → `assets/look-02.jpg`
- `{{URL_LOOK_03}}` → `assets/look-03.jpg`
- `{{URL_UNSUBSCRIBE}}` → your unsubscribe link

## order-shipped.html
Earlier animated order-shipped template (transactional style, placeholder brand).
