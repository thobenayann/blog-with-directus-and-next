function ArticlesList({articlesList}) {
    return (
        <div>
            { articlesList.map((article) =>
                <div key={article.id}>
                <h1>{article.title}</h1>
                {/* <Image src={articleList.data[0].image} alt={articleList.data[0].title}/> */}
                <p className="whitespace-pre-wrap">{article.published_at}</p>
                {article.content}
                </div>
            )}
        </div>
    )
}

export default ArticlesList
