// компонент отображения подробной информации о статье
Vue.component('blog-details', {
    props: ['blog', 'tag', 'celectedTag'],
    data() {
        return {

        }
    },
    template: `
        <div class="blog center">
            <h2 class="blog__title_standart">{{ blog.title }}</h2>
            <img width="910" src="blog.img" alt="Photo">
            <div class="blog__info">
                <p>{{ blog.date }}</p>
                <p>{{ blog.breadcrumbs }}</p>
            </div>
            <p class="blog__text_standart">{{ blog.text }}</p>
        </div>
    `,
});

// компонент отображения краткой информации о статье в компоненте blogs-list
Vue.component('blog-item', {
    props: ['blog', 'tag', 'celectedTag'],
    data() {
        return {

        }
    },
    template: `
        <div class="blog center">
            <h2 class="blog__title_brief">{{ blog.title }}</h2>
        </div>
    `,
});



// компонент который выводит список из компонент blog-item и фильтрует его на основе выбранного тега
// пока пишу в new Vue
// Vue.component('blogs-list', {
// });

// new Vue({
//     el: '#app',
// });
