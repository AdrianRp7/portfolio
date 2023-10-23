import { onMounted, onUnmounted } from 'vue';

/**
 * 
 * @param target the element we want to add observer (if could we multiple)
 * @param classCss the class we add when the element is visible
 */
export function IntersectionObserverCom(target: string, classCss :string) {
    function isVisible(entries: IntersectionObserverEntry[], observer: IntersectionObserver) : void {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classCss);
                observer.unobserve(entry.target);
            }
        });
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.95
    };
    
    const observer = new IntersectionObserver(isVisible, options);
    onMounted(() => {
        document.querySelectorAll(target).forEach(element => {
            observer.observe(element);
        });
    })
    onUnmounted(() => observer.disconnect());
}
