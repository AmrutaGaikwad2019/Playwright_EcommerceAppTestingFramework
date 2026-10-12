
export function slugify(text) {

    return String(text).toLowerCase().trim().replace(/[()]/g, '').replace(/\s+/g, '-');
}

export function parsePrice(priceString) {
    return parseFloat(
        String(priceString).replace(/[^\d.-]/g, '')
    );
}