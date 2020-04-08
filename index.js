
// Step 1: Create a Vue instance
const Vue = require("vue");

const AppCard = {
  template: `<div>appCardProp: {{ appCardProp }}</div>`,
  props: {
    appCardProp: {}
  }
}

const PlayerCard = {
  template: `<AppCard v-bind="$attrs" />`,
  components: { AppCard },
  inheritAttrs: false
}

const app = new Vue({
  template: `
  <div>
    <PlayerCard app-card-prop="appCardProp value" />
  </div>
  `,
  components: { PlayerCard }
});

// Step 2: Create a renderer
const renderer = require("vue-server-renderer").createRenderer();

// Step 3: Render the Vue instance to HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log(html);
  // <div data-server-rendered="true"><div app-card-prop="appCardProp value">appCardProp: appCardProp value</div></div>
  // Html attribute "app-card-prop" must be missing
});