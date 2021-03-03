(function () {
    if (window.matchMedia(`(max-width: 900px)`).matches) {
        return;
    }

    const headerPage = document.querySelector(".header__inner");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
            headerPage.classList.add("active");
        } else {
            headerPage.classList.remove("active");
        }
    });
})();

(function () {
    const body = document.querySelector("body");

    const closestItemByClass = function (item, className) {
        let node = item;

        while (node) {
            if (node.classList.contains(className)) {
                return node;
            }

            node = node.parentElement;
        }
        return null;
    };

    const closestAttr = function (item, attr) {
        let node = item;

        while (node) {
            let attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }

            node = node.parentElement;
        }
        return null;
    };

    const showPopup = (target) => {
        target.classList.add("active");
    };

    const closePopup = (target) => {
        target.classList.remove("active");
    };

    body.addEventListener("click", function (e) {
        let target = e.target;
        let popupClass = closestAttr(target, "data-popup");

        if (popupClass === null) {
            return;
        }

        e.preventDefault();

        let popup = document.querySelector("." + popupClass);

        if (popup) {
            showPopup(popup);
        }
    });
    body.addEventListener("click", function (e) {
        let target = e.target;

        if (
            target.classList.contains("popup__btn-close") ||
            target.classList.contains("popup__menu-wrapper")
        ) {
            let popup = closestItemByClass(target, "popup__menu");
            closePopup(popup);
        }
    });
})();
