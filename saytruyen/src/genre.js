function execute() {
    let response = fetch("https://saytruyen.net/genre");
    if (response.ok) {
        let doc = response.html();
        doc.select(".number-story").remove();
        let genre = [];
        doc.select(".page-genres a").forEach(e => genre.push({
            title: e.text(),
            input: e.attr("href"),
            script: "gen.js"
        }));
        return Response.success(genre);
    }
    return null;
}