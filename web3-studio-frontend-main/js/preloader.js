const LoadingInidicator = (function () {
    function LoadingInidicator(options) {
        if (options === void 0) {
            options = {};
        }
        let _a, _b;
        const nodes = (_a = options.nodes) !== null && _a !== void 0 ? _a : 5;
        const attachTo = (_b = options.attachTo) !== null && _b !== void 0 ? _b : document.body;
        const root = document.createElement("div");
        root.classList.add("cradle");
        Array.from(this.createNodes(nodes)).forEach(function (node) {
            return root.appendChild(node);
        });
        attachTo.appendChild(root);
    }

    LoadingInidicator.prototype.createNodes = function (count) {
        const nodes = [];
        let i = 0;
        while (i < count) {
            const node = document.createElement("div");
            nodes.push(node);
            node.classList.add("node");
            i++;
        }
        return nodes;
    };
    return LoadingInidicator;
}());


$(document.body).after(`<div class='preloader'></div>`);
const indicator = new LoadingInidicator({
    attachTo: document.querySelector(".preloader"),
    nodes: 5
});
$(document.body).hide("0")

$(window).on("beforeunload", function () {
    $(window).scrollTop(0);
    hidePreloader()
});

window.addEventListener("load", event => {
    hidePreloader()
});

function hidePreloader() {
    let delay = 650;
    $(document.body).delay(delay).fadeIn();
    $(".preloader").delay(delay).fadeOut("750", function () {
        $(this).remove()
    })
}