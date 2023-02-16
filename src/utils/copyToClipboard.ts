export const copyToClipboard = (text: string) => {
    // Copy the text inside the text field
    navigator.clipboard.writeText(text);

    console.log("Copied the text: " + text);
};
