export function isAElement(elemento: HTMLElement | null): elemento is HTMLElement {
    return elemento instanceof HTMLElement;
} 

export function changeActualElementNavbar(actualElement: string) {
    let accentBar: HTMLElement | null = document.querySelector<HTMLElement>(".accent-bar");
    let offsetLeftInitial: number | undefined = document.querySelector<HTMLElement>(".v-toolbar__append .d-none.d-md-block")?.offsetLeft;
    
    
    let actual: HTMLElement | null = null as HTMLElement | null;
    document.querySelectorAll<HTMLElement>(".section-href").forEach((element: HTMLElement) => {
        element.classList.remove('hightlight');
        if('#' + actualElement === element.getAttribute("href")) {
        actual = element;
        console.log(actual)
        element.classList.add('hightlight');
        }
    })
    
    if(isAElement(accentBar) && isAElement(actual)){
        accentBar.querySelector<HTMLElement>(".v-btn__content")?.style.setProperty("--left", (actual.offsetLeft - (offsetLeftInitial ?? 0)) + "px");
        accentBar.querySelector<HTMLElement>(".v-btn__content")?.style.setProperty("--width", (actual.offsetWidth - 28) + "px"); //28 is equal to padding button
    } 
}