import { createSpinner } from './spinner.js';
import '../css/main.css';

function createLatestNewsElement(article) {
  const { title, link } = article;

  const listItem = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.setAttribute('href', link);
  anchor.textContent = title;

  listItem.className = 'latest-news-item';
  listItem.append(anchor);

  return listItem;
}

function createTopNewsElement(article) {
  const { title, summary, link, thumbnailImage } = article;

  const anchor = document.createElement('a');
  anchor.setAttribute('href', link);
  anchor.innerHTML = `
    <article class="news">
      <div class="information">
        <h3 class="title">${title}</h3>
        <p class="description">${summary}</p>
      </div>
      <div class="thumbnail-area">
        <img src="${thumbnailImage}" alt="thumbnail" class="thumbnail" />
      </div>
    </article>`;

  return anchor;
}

function renderTopNews() {
  const articleSection = document.getElementById('topNewsList');

  createSpinner(articleSection);

  setTimeout(() => {
    fetch('../../data/top.json')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) =>
          createTopNewsElement(article)
        );

        articleSection.append(...articleList);
      })
      .finally(() => {
        hideSpinner(articleSection);
      });
  }, 1500);
}

function renderLatestNews() {
  const latestNewsList = document.querySelector('.latest-news-list');

  createSpinner(latestNewsList);

  setTimeout(() => {
    fetch('../../data/latest.json')
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) =>
          createLatestNewsElement(article)
        );

        latestNewsList.append(...articleList);
      })
      .finally(() => {
        hideSpinner(latestNewsList);
      });
  }, 1500);
}

function hideSpinner(parent) {
  const spinnerArea = parent.querySelector('.spinner-area');
  spinnerArea.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  renderTopNews();
  renderLatestNews();
});
