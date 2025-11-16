export const trimHtml = (html: string, limit: number) => {
    const div: HTMLElement = document.createElement("div");
    div.innerHTML = html;

    let charCount = 0;
    let done = false;

    function walk(node: Node): Node | null {
        if (done) return null;

        // TEXT NODE
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent ?? "";

            if (charCount + text.length > limit) {
                const sliced = text.slice(0, limit - charCount);
                charCount = limit;
                done = true;
                return document.createTextNode(sliced + "...");
            }

            charCount += text.length;
            return document.createTextNode(text);
        }

        // ELEMENT NODE
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const clone = element.cloneNode(false) as HTMLElement;

            element.childNodes.forEach((child: ChildNode) => {
                if (!done) {
                    const result = walk(child);
                    if (result) clone.appendChild(result);
                }
            });

            return clone;
        }

        return null;
    }

    const result = walk(div);

    return result instanceof HTMLElement
        ? result.innerHTML
        : result?.textContent ?? "";
};
