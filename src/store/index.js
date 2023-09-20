import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [
            {
                id: 11, img: 'blog1.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Kitchen']
            },
            {
                id: 21, img: 'blog2.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Bedroom']
            },
            {
                id: 31, img: 'blog3.jpg', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Building']
            },
            {
                id: 41, img: 'blog4.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Architecture']
            },
            {
                id: 51, img: 'blog5.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Kitchen Planning', 'Kitchen']
            },
            {
                id: 61, img: 'blog6.png', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Bedroom']
            },
            {
                id: 71, img: 'blog6.png', groupArticle: 'Interior Design', title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', simpleText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', dataArticle: '26 December,2022', tag: ['Kitchen Planning', 'Kitchen']
            },
            {
                id: 81, img: 'blog1.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Kitchen']
            },
            {
                id: 91, img: 'blog2.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Bedroom']
            },
            {
                id: 101, img: 'blog3.jpg', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Building']
            },
            {
                id: 111, img: 'blog4.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Architecture']
            },
            {
                id: 121, img: 'blog5.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Kitchen Planning', 'Kitchen']
            },
            {
                id: 131, img: 'blog6.png', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Bedroom']
            },
            {
                id: 141, img: 'post-latest.jpg', groupArticle: 'Interior Design', title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', simpleText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', dataArticle: '26 December,2022', tag: ['Kitchen Planning', 'Kitchen']
            }
        ],
        projectArticles: [
            {
                id: 12, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project1.jpg', classHomepage: 'borderTopRight', category: 'Kitchan', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 22, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project2.jpg', classHomepage: 'borderTopLeft', category: 'Kitchan', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 32, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project3.jpg', classHomepage: 'borderBotRight', category: 'Bathroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 42, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project4.jpg', classHomepage: 'borderBotLeft', category: 'Kitchan', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 52, title: 'Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj1.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 62, title: 'Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj2.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 72, title: 'Classic Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj3.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 82, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj4.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 92, title: 'Minimal Bedroom table', text: 'Decor / Artchitecture', img: 'proj5.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 102, title: 'System Table', text: 'Decor / Artchitecture', img: 'proj6.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 112, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj7.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 122, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj8.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 132, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project1.jpg', classHomepage: 'borderTopRight', category: 'Kitchan', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 142, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project2.jpg', classHomepage: 'borderTopLeft', category: 'Kitchan', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 152, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project3.jpg', classHomepage: 'borderBotRight', category: 'Bathroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 162, title: 'Modern Kitchan', text: 'Decor / Artchitecture', img: 'project4.jpg', classHomepage: 'borderBotLeft', category: 'Kitchan', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 172, title: 'Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj1.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 182, title: 'Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj2.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 192, title: 'Classic Minimal Bedroom', text: 'Decor / Artchitecture', img: 'proj3.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 202, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj4.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 212, title: 'Minimal Bedroom table', text: 'Decor / Artchitecture', img: 'proj5.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-big', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 222, title: 'System Table', text: 'Decor / Artchitecture', img: 'proj6.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 232, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj7.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
            {
                id: 242, title: 'Modern Bedroom', text: 'Decor / Artchitecture', img: 'proj8.jpg', classHomepage: 'borderBotLeft', category: 'Bedroom', classProjectPage: 'project-list-small', textDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.', textDescription2: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.', imgForSlider: [
                    { id: "img1", url: "slider-proj.jpg" },
                    { id: "img2", url: "slider-proj2.jpg" },
                    { id: "img3", url: "slider-proj3.jpg" },
                ],
            },
        ],
        // projectForDetails: {},
    },
    // mutations: {
    //     SET_PROJECT: (state, article) => {
    //         state.projectForDetails = article;
    //     } 
    // },
    actions: {
        //методы для асинхронных операций
    },
    getters: {
        articles(state) {
            return state.articles;
        },
        projectArticles(state) {
            return state.projectArticles;
        },
        postsForIndex(state) {
            return state.articles.slice(0, 3);
        },
        projectForIndex(state) {
            return state.projectArticles.slice(0, 4);
        },
        latestPost(state) {
            return state.articles[state.articles.length - 1];
        },
        postsForBlog(state) {
            return state.articles.slice(0, state.articles.length - 1); //все статьи кроме последней, которая выводтся выше
        },
        postForDetails: state => id => {
            return state.articles.find(item => item.id === id); 
        },
        projectForDetails: state => id => state.projectArticles.find(item => item.id === id),
    },

});