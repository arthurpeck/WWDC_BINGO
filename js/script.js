{
    const init = () => {
        const $divs = document.querySelectorAll(`div`);

        for (let i = 0; i < $divs.length; i++) {
            const $div = $divs[i];

            $div.addEventListener("click", handleClickItem);
        }
    }

    const handleClickItem = e => {
        e.currentTarget.classList.add(`selected`);
    }

    init();
}