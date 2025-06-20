const dateFormatter = new Intl.DateTimeFormat("en-In", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    day: "2-digit",
    month: "short",
    year: "numeric",
});

export const formatDate = (date) => dateFormatter.format(date);