export function elementHtmlSelect( selectHTML:HTMLElement | null ): HTMLElement{
    if(selectHTML !== null) return document.getElementById('menu') as HTMLElement

    const menuDom: HTMLElement = document.createElement('div')
    menuDom.setAttribute('id','menu')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bodyElement = document.querySelector('body')!
    bodyElement.appendChild(menuDom)
    return menuDom 
}