// Date in MMMM/DD/YYYY format
export default function formatDate(dateStr) {
    const date = new Date(dateStr);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return date.toLocaleDateString(options);
}