function book(title, author, pages) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.info = function () {
      return title + ",by " + author + " " + pages + ", pages";
    });
}

const thehobit = new book("The hobit", "J.R.R. Tolkien", 295);
console.log(thehobit.info());
