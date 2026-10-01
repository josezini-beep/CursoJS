function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }

    if (seconds < 0) {
        return "invalid input";
    }

    if (seconds < 60) {
        return seconds + " second" + (seconds > 1 ? "s" : "");
    }

    if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return minutes + " minute" + (minutes > 1 ? "s" : "")
            + (remainingSeconds > 0
                ? " and " + remainingSeconds + " second"
                    + (remainingSeconds > 1 ? "s" : "")
                : "");
    }

    if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const finalSeconds = remainingSeconds % 60;

        return hours + " hour" + (hours > 1 ? "s" : "")
            + (minutes > 0
                ? (finalSeconds === 0 ? " and " : ", ")
                    + minutes + " minute" + (minutes > 1 ? "s" : "")
                : "")
            + (finalSeconds > 0
                ? " and " + finalSeconds + " second"
                    + (finalSeconds > 1 ? "s" : "")
                : "");
    }

    if (seconds < 31536000) {
        const days = Math.floor(seconds / 86400);
        const remainingSeconds = seconds % 86400;
        const hours = Math.floor(remainingSeconds / 3600);
        const finalSeconds = remainingSeconds % 3600;
        const minutes = Math.floor(finalSeconds / 60);
        const finalFinalSeconds = finalSeconds % 60;

        return days + " day" + (days > 1 ? "s" : "")
            + (hours > 0
                ? (finalSeconds === 0 ? " and " : ", ")
                    + hours + " hour" + (hours > 1 ? "s" : "")
                : "")
            + (minutes > 0
                ? (finalFinalSeconds === 0 ? " and " : ", ")
                    + minutes + " minute" + (minutes > 1 ? "s" : "")
                : "")
            + (finalFinalSeconds > 0
                ? " and " + finalFinalSeconds + " second"
                    + (finalFinalSeconds > 1 ? "s" : "")
                : "");
    }

    if (seconds >= 31536000) {
        const years = Math.floor(seconds / 31536000);
        const remainingSeconds = seconds % 31536000;
        const days = Math.floor(remainingSeconds / 86400);
        const finalSeconds = remainingSeconds % 86400;
        const hours = Math.floor(finalSeconds / 3600);
        const finalFinalSeconds = finalSeconds % 3600;
        const minutes = Math.floor(finalFinalSeconds / 60);
        const finalFinalFinalSeconds = finalFinalSeconds % 60;

        return years + " year" + (years > 1 ? "s" : "")
            + (days > 0
                ? (finalSeconds === 0 ? " and " : ", ")
                    + days + " day" + (days > 1 ? "s" : "")
                : "")
            + (hours > 0
                ? (finalFinalSeconds === 0 ? " and " : ", ")
                    + hours + " hour" + (hours > 1 ? "s" : "")
                : "")
            + (minutes > 0
                ? (finalFinalFinalSeconds === 0 ? " and " : ", ")
                    + minutes + " minute" + (minutes > 1 ? "s" : "")
                : "")
            + (finalFinalFinalSeconds > 0
                ? " and " + finalFinalFinalSeconds + " second"
                    + (finalFinalFinalSeconds > 1 ? "s" : "")
                : "");
    }
}
