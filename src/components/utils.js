import { navigate } from "gatsby";

export const navigateWithScroll = (target, event) => {
    event.preventDefault();
    const anchorTarget = document.getElementById(target);
    if (anchorTarget) {
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        navigate(`/#${target}`);
    }
}; 