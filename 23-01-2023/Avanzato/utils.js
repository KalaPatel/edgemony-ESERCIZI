const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardCreator = (data) => {
    const quoteBoxEl = cE ("div");
    const quoteTextEl = cE ("p");
    const authorNameEl = cE("p")
    
    quoteBoxEl.className = ("quote_Box");
    quoteTextEl.className = ("quote_text")
    authorNameEl.className =("authorName");

    quoteTextEl.textContent = data.quote;
    authorNameEl.textContent = data.author;

    quoteBoxEl.append(quoteTextEl, authorNameEl);
    return quoteBoxEl;
}

export{ cE, qS, cardCreator};
