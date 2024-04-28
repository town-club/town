const HtmlPrefetch = (entry:string,paths:string[])=>{
    return {
        name: "html-prefetch-plugin",
        async transform(code,id){
            //首屏完后注入
            if (id.includes(entry)){
                return `
                ${code}
                window.onload = ()=>{
                    const lazyPages = ${JSON.stringify(paths)};
                    lazyPages.forEach(item => fetch(item));
                }
                `
            }
            return code
        }
    }
}
export default HtmlPrefetch