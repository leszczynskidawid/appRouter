import React from 'react';
import "../styles/mainPage.css"


const articles = [
    {id:1, title:"czy kamil stoch zdobędzie medal igrzysk olimpijskich?" , author:"Dawid Leszczynski", tekst: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "},
    {id:2, title:"czemu to ostania szansa?" , author:"Dawid Leszczynski", tekst: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "},
    {id:3, title:"czy czekaają nas lata posuchy?" , author:"Dawid Leszczynski", tekst: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "},

]
const MainPage = (e) => {
    const article = articles.map(article => (<article key = {article.id}>
        <h1>{article.title}</h1>
        <h5>{article.author}</h5>
        <p>{article.tekst}</p>
        </article>))
return(

<>
{article}
</>

)
};
export default MainPage; 